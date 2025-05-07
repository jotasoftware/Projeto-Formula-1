import { useContext } from "react";
import { DriverContext } from "../../context/DriverContext";
import './Driver.css';

const Driver = () =>{
    const { driverData } = useContext(DriverContext);

    if(!driverData) {
        //TODO fazer loading dos Driveros
        return <p>carregando dados</p>
    }

    const driverInfo = driverData.Driver
    const teamInfo = driverData.Constructors[0]

    const getAge = () => {
        const dateNow = new Date();
        const birthDate = new Date(driverInfo.dateOfBirth);
        let age = dateNow.getFullYear() - birthDate.getFullYear();
        const month = dateNow.getMonth() - dateNow.getMonth();
        if(month < 0 || (month === 0 && dateNow.getDate() < birthDate.getDate())) age--
        return age;
    }

    return (
        <h2 className="white">{driverInfo.givenName + driverInfo.familyName + driverInfo.permanentNumber + driverInfo.url + getAge() + driverData.position + driverData.points + teamInfo.name + teamInfo.url}</h2>
    )
}

export default Driver;