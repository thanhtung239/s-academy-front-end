import React, { useContext, useState } from "react";
import { Avatar, Layout, Dropdown, MenuProps} from "antd";
import { AppContext } from "../../contexts/AppContext";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./base.css";

const { Header } = Layout;

const AppHeader = () => {
    const { collapsed, setCollapsed, userData } = useContext(AppContext);
    

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }

    const MenuIcon = (props) => {
        return props.collapsed ? <MenuUnfoldOutlined className="trigger-icon" onClick={toggleSidebar} />
            : <MenuFoldOutlined className="trigger-icon" onClick={toggleSidebar} />
    }

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

    const items: MenuProps['items'] = [
        {
            label: <Link onClick={handleLogout} to="/profile">
                       <UserOutlined />
                       <span style={{marginLeft: 5}}>Profile</span>
                   </Link>,
            key: '1',
            url: '/profile'
        },
        {
            label: <Link onClick={handleLogout} to="/login">
                       <LogoutOutlined />
                       <span style={{marginLeft: 5}}>Logout</span>
                   </Link>,
            key: '2',
            url: '/login'
        },
    ];


    return (
        <Header className="app-header">
            <MenuIcon collapsed={collapsed} />
            <div className="user-name">
                <div style={{
                    marginRight: 10,
                    fontSize: 16,
                }}>
                    {userData.first_name + " " + userData.last_name}
                </div>
                <Dropdown menu={{ items }}> 
                    <Avatar size={44} icon={<UserOutlined />}></Avatar> 
                </Dropdown>
            </div>
        </Header>
    )
}

export default AppHeader
