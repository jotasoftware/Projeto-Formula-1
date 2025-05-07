import React, { useContext } from 'react';
import { DriverContext } from "../../context/DriverContext";
import "./Table.css";

const columns = {
    drivers: ["Nº", "Piloto", "Equipe", "Pontos"],
    teams: ["Nome", "Piloto 1", "Piloto 2", "Pontos"]
}
  

const Table = ({type}) => {
    const { driversData, setSelectDriver } = useContext(DriverContext);

    if(!driversData) return <p>carregando</p>

    const handleClick = (driver)=>{
        if(driver.Driver.familyName === 'Verstappen') {
            return setSelectDriver(`${(driver.Driver.givenName).toLowerCase()}_${(driver.Driver.familyName).toLowerCase()}`)
        }
        setSelectDriver((driver.Driver.familyName).toLowerCase())
    }

    return (
        <div className='tableDiv'>
            <table>
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>{columns[type][0]}</th>
                        <th>{columns[type][1]}</th>
                        <th>{columns[type][2]}</th>
                        <th>{columns[type][3]}</th>
                    </tr>
                </thead>
                <tbody>
                    {(driversData.DriverStandings).map((driver, index)=>(
                        <tr key={index} onClick={() => handleClick(driver)}>
                            <td>{index+1}</td>
                            <td>{driver.Driver.permanentNumber}</td>
                            <td>{driver.Driver.familyName}</td>
                            <td>{driver.Constructors[0].name}</td>
                            <td>{driver.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
