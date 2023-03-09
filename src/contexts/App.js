import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <AppContext.Provider value={{collapsed, setCollapsed}}>
        {children}
        </AppContext.Provider>
    )
}
