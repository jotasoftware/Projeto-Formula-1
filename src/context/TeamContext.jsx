import { createContext, useEffect, useContext, useReducer } from "react";
import React from "react";
import { SeasonContext } from "./SeasonContext";

export const TeamContext = createContext();

const initialState = {
    teamsData: null,
}

const reducer =(state, action) =>{
    switch(action.type){
        case "set_teams_data":
            return {...state, teamsData: action.payload};
        default:
            throw Error('Not found action: ' + action.type);
    };
};

const TeamProvider = ({children}) =>{
    const { yearSeason } = useContext(SeasonContext);

    const [state, dispatch] = useReducer(reducer, initialState)
    const { teamsData } = state;

    useEffect(()=>{

        const fetchAllTeams = async () => {
            try{
                const response = await fetch(`https://api.jolpi.ca//ergast/f1/${yearSeason}/constructorstandings.json`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(`Erro API F1: ${response.status} ${response.statusText}`);
                }
                dispatch({
                    type: 'set_teams_data',
                    payload: data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
                })
            }catch (error){
                console.error('Error to find data of all teams:', error);
            }
        };

        fetchAllTeams();
    }, [yearSeason])

    return (
        <TeamContext.Provider value={{ teamsData}} >
            {children}
        </TeamContext.Provider>
    )
};

export default TeamProvider;