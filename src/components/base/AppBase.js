import React, { useState } from "react";
import { Layout, Switch } from "antd";
import AppSider from "./AppSider";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./base.css";
import { AppContextProvider } from "../../contexts/App";
import { Route, Routes } from "react-router-dom";
import Home from "../../containers/Home/Home";
import Profile from "../../containers/Profile/Profile";
import AllCourses from "../../containers/AllCourses/AllCourses";
import PageNotFound from "../../containers/NotFound/PageNotFound";

const AppBase = () => {
    return (
        <div>
            <Layout className="app-base">
                <AppContextProvider>
                    <AppSider />
                    <Layout className="site-layout">
                        <AppHeader />
                        <div className="app-content">
                            <Routes>
                                <Route exact path="/" element={ <Home /> }></Route>
                                <Route exact path="/profile" element={ <Profile /> }></Route>
                                <Route exact path="/all_courses" element={<AllCourses />} ></Route>
                                <Route path="/*" element={<PageNotFound />}></Route>
                            </Routes>
                        </div>
                        <AppFooter />
                    </Layout>
                </AppContextProvider>
            </Layout>
            
        </div>
    )
}

export default AppBase
