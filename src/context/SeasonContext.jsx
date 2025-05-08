import { createContext, useState } from "react";
import React from "react";

export const SeasonContext = createContext();

const SeasonProvider = ({children}) =>{

    const [yearSeason, setYearSeason] = useState(2025);

    return (
        <SeasonContext.Provider value={{ yearSeason, setYearSeason}} >
            {children}
        </SeasonContext.Provider>
    )
};

export default SeasonProvider;