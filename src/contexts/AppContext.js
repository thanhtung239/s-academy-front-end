import React, { createContext, useState, useEffect } from "react";
import { getAPI } from "../api/config";
import { GET_CURRENT_USER } from "../constants/api";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const successFn = (data) => {
            setUserData(data.shift());
        }

        getAPI(GET_CURRENT_USER, successFn);
    }, [])

    return (
        <AppContext.Provider value={{collapsed, setCollapsed, userData, setUserData}}>
            {children}
        </AppContext.Provider>
    )
}
