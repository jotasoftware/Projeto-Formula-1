import { useContext } from "react";
import { DriverContext } from "../../context/DriverContext";

const Pilots = () =>{
    const { driverData } = useContext(DriverContext);
    if(!driverData) {
        //TODO fazer loading dos pilotos
        return <p>carregando dados</p>
    }

    return (
        <h2>{driverData.givenName + driverData.familyName}</h2>
    )
}

export default Pilots;