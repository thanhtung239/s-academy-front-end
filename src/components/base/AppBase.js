import React from "react";
import { Layout } from "antd";
import AppSider from "./AppSider";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./base.css";
import { AppContextProvider } from "../../contexts/AppContext";
import { Route, Routes } from "react-router-dom";
import Home from "../../containers/Home/Home";
import Profile from "../../containers/Profile/Profile";
import AllCourses from "../../containers/Courses/AllCourses";
import PageNotFound from "../../containers/NotFound/PageNotFound";
import AllWorkspaces from "../../containers/Workspaces/AllWorkspaces";
import DetailCourse from "../../containers/Courses/DetailCourse";
import Lesson from "../../containers/Lessons/Lesson";
import CreateCourse from "../../containers/Create/Course/Course";
import CreateLesson from "../../containers/Create/Lesson/Lesson";

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
                                <Route exact path="/courses" element={<AllCourses />} ></Route>
                                <Route exact path="/courses/:course_id" element={<DetailCourse />}></Route>
                                <Route exact path="/courses/:course_id/lessons/:lesson_id" element={<Lesson />}></Route>
                                <Route exact path="/workspaces" element={<AllWorkspaces />}></Route>
                                <Route exact path="/create/course" element={<CreateCourse />}></Route>
                                <Route exact path="/create/lesson" element={<CreateLesson />}></Route>
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
