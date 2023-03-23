import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import AppSider from "./AppSider";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./base.css";
import { AppContextProvider } from "../../contexts/App";
import { Route, Routes } from "react-router-dom";
import Home from "../../containers/Home/Home";
import Profile from "../../containers/Profile/Profile";
import AllCourses from "../../containers/Courses/AllCourses";
import PageNotFound from "../../containers/NotFound/PageNotFound";
import AllWorkspaces from "../../containers/Workspaces/AllWorkspaces";
import axios from "axios";

const AppBase = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get('http://localhost:8000/api/users/');
            console.log(data)
            setUserData(data);
        }
        fetchData()
            .catch(console.error)
    }, [])

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
                                <Route exact path="/courses" element={<AllCourses />} ></Route>
                                <Route exact path="/workspaces" element={<AllWorkspaces />}></Route>
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
