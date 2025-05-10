import { createContext, useEffect, useContext, useReducer } from "react";
import React from "react";
import { SeasonContext } from "./SeasonContext";

export const RaceContext = createContext();

const initialState = {
    racesData: null,
}

const reducer =(state, action) =>{
    switch(action.type){
        case "set_races_data":
            return {...state, racesData: action.payload};
        default:
            throw Error('Not found action: ' + action.type);
    };
};

const RaceProvider = ({children}) =>{
    const { yearSeason } = useContext(SeasonContext);

    const [state, dispatch] = useReducer(reducer, initialState)
    const { racesData } = state;

    useEffect(()=>{

        const fetchAllRaces = async () => {
            try{
                const response = await fetch(`https://api.jolpi.ca//ergast/f1/${yearSeason}/races.json`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(`Erro API F1: ${response.status} ${response.statusText}`);
                }
                console.log(data.MRData.RaceTable.Races)
                dispatch({
                    type: 'set_races_data',
                    payload: data.MRData.RaceTable.Races
                })
            }catch (error){
                console.error('Error to find data of all races:', error);
            }
        };

        fetchAllRaces();
    }, [yearSeason])

    return (
        <RaceContext.Provider value={{ racesData}} >
            {children}
        </RaceContext.Provider>
    )
};

export default RaceProvider;