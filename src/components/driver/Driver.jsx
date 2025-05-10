import { useContext } from "react";
import { DriverContext } from "../../context/DriverContext";
import './Driver.css';
import { AiOutlineClose } from "react-icons/ai";
import { SeasonContext } from "../../context/SeasonContext";
import Loading from "../loading/Loading";

const Driver = () =>{
    const { driverData, setSelectDriver } = useContext(DriverContext);
    const { yearSeason } = useContext(SeasonContext);

    if(!driverData) {
        return <Loading />
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

    const handleClick = ()=>{
        setSelectDriver("")
    }

    return (
        <div className="driverCard">
            <div className="driverDiv">
                <span className="number">{driverInfo.permanentNumber}</span>
                <div className="nomeDriver">
                    <h2>{driverInfo.givenName +" "+ driverInfo.familyName}</h2>
                    <div className="closeDriver">
                        <AiOutlineClose onClick={handleClick} size={24} />
                    </div>
                </div>
                <div className="infoDriver">
                    <p>{driverInfo.nationality}</p>
                    <p>{new Date(driverInfo.dateOfBirth).toLocaleDateString("pt-BR")}</p>
                    <p>{getAge()} anos</p>
                    <p>{driverData.wins} vitórias em {yearSeason}</p>
                    <p>{teamInfo.name}</p>
                    <a href={driverInfo.url}target="_blank" rel="noreferrer">Mais Informações</a>
                </div>
            </div>
        </div>
    )
}

export default Driver;