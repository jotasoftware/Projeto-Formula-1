import { createContext, useEffect, useContext, useReducer } from "react";
import React from "react";
import { SeasonContext } from "./SeasonContext";

export const DriverContext = createContext();

const initialState = {
    selectDriver: "",
    driverData: null,
    driversData: null,
}

const reducer =(state, action) =>{
    switch(action.type){
        case "set_select_driver":
            return {...state, selectDriver: action.payload};
        case "set_driver_data":
            return {...state, driverData: action.payload};
        case "set_drivers_data":
            return {...state, driversData: action.payload};
        default:
            throw Error('Not found action: ' + action.type);
    };
};

const DriverProvider = ({children}) =>{
    const [driver, table] = React.Children.toArray(children);

    const { yearSeason } = useContext(SeasonContext);

    const [state, dispatch] = useReducer(reducer, initialState)
    const { selectDriver, driverData, driversData } = state;

    useEffect(()=>{
        const fetchDriver = async () => {
            try{
                if(!yearSeason) throw new Error(`Year not found`);
                const response = await fetch(`https://api.jolpi.ca/ergast/f1/${yearSeason}/drivers/${selectDriver}/driverStandings.json`);
                if (!response.ok) {
                    throw new Error(`Erro API F1: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                dispatch({
                    type: 'set_driver_data',
                    payload: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
                })
            }catch (error){
                console.error('Error to find data of the driver', error);
            }
        };
        if(selectDriver !== "") fetchDriver();
    }, [selectDriver, yearSeason])

    useEffect(()=>{

        const fetchAllDrivers = async () => {
            try{
                const response = await fetch(`https://api.jolpi.ca/ergast/f1/${yearSeason}/driverStandings.json`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(`Erro API F1: ${response.status} ${response.statusText}`);
                }
                dispatch({
                    type: 'set_drivers_data',
                    payload: data.MRData.StandingsTable.StandingsLists[0]
                })
            }catch (error){
                console.error('Error to find data of the drivers:', error);
            }
        };

        fetchAllDrivers();
    }, [yearSeason])

    return (
        <DriverContext.Provider value={{ driverData, driversData, setSelectDriver: (driverId) =>
            dispatch({ type: 'set_select_driver', payload: driverId }) }} >
            {table}
            {selectDriver !== "" && driver}
        </DriverContext.Provider>
    )
};

export default DriverProvider;