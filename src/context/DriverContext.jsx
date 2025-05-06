import { createContext, useState, useEffect } from "react";
import Pilots from "../components/pilots/Pilots";

export const DriverContext = createContext();

const DriverProvider = ({children}) =>{
    const [selectDriver, setSelectDriver] = useState("leclerc");
    const [driverData, setDriverData] = useState(null);

    useEffect(()=>{
        //TODO verificar com o professor se é fetch ou ajax

        // const fetchDriver = async () => {
        //     try {
        //       const response = await fetch(`https://api.jolpi.ca/ergast/f1/2025/drivers/${selectDriver}.json`);
        //       const data = await response.json();
        //       setDriverData(data.MRData.DriverTable.Drivers[0]);
        //       console.log(data.MRData.DriverTable.Drivers[0])
        //     } catch (error) {
        //       console.error('Erro ao buscar dados do piloto selecionado:', error);
        //     }
        // };

        function ajax(url, callback) {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', url, true);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    callback(xmlhttp.responseText);
                }
            };
            xmlhttp.send();
        };

        const fetchDriver = () => {
            const url = `https://api.jolpi.ca/ergast/f1/2025/drivers/${selectDriver}.json`;
            ajax(url, (resp) =>{
                const data = JSON.parse(resp);
                setDriverData(data.MRData.DriverTable.Drivers[0]);
            });
        };

        fetchDriver();
    }, [selectDriver])
    return (
        <DriverContext.Provider value={{ driverData }} >
            {children}
        </DriverContext.Provider>
    )
};

export default DriverProvider;