import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBase from "../components/base/AppBase";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/*" element={<AppBase />}></Route>
        </Routes>
    )
}

export default AppRoutes
