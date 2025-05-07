import { createContext, useState, useEffect } from "react";
import React from "react";

export const DriverContext = createContext();

const DriverProvider = ({children}) =>{
    const [driver, table] = React.Children.toArray(children);

    const [selectDriver, setSelectDriver] = useState("");
    const [driverData, setDriverData] = useState(null);
    const [driversData, setDriversData] = useState(null)

    useEffect(()=>{
        const fetchDriver = async () => {
            try {
                console.log(selectDriver)
              const response = await fetch(`https://api.jolpi.ca/ergast/f1/2025/drivers/${selectDriver}/driverStandings.json`);
              const data = await response.json();
              setDriverData(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])
              console.log(data.MRData.StandingsTable.StandingsLists[0])
            } catch (error) {
              console.error('Erro ao buscar dados do piloto selecionado:', error);
            }
        };
        if(selectDriver !== "") fetchDriver();
    }, [selectDriver])

    useEffect(()=>{

        const fetchAllDrivers = async () => {
            try {
              const response = await fetch(`https://api.jolpi.ca/ergast/f1/2025/driverStandings.json`);
              const data = await response.json();
              setDriversData(data.MRData.StandingsTable.StandingsLists[0])
            } catch (error) {
              console.error('Erro ao buscar dados de todos os pilotos:', error);
            }
        };

        fetchAllDrivers();
    }, [])
    //TODO se nao tiver nenhum piloto selecionado, soltar a tabela
    return (
        <DriverContext.Provider value={{ driverData, driversData, setSelectDriver }} >
            {selectDriver !== "" ? driver : table}
        </DriverContext.Provider>
    )
};

export default DriverProvider;