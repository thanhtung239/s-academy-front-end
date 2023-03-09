import React, {useContext, useState} from "react";
import { Avatar, Layout, Dropdown, MenuProps} from "antd";
import { AppContext } from "../../contexts/App";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./base.css";

const { Header } = Layout;

const AppHeader = () => {
    const { collapsed, setCollapsed } = useContext(AppContext);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }

    const MenuIcon = (props) => {
        return props.collapsed ? <MenuUnfoldOutlined className="trigger-icon" onClick={toggleSidebar} />
            : <MenuFoldOutlined className="trigger-icon" onClick={toggleSidebar} />
    }

    const items: MenuProps['items'] = [
        {
            label: <Link to="/profile">Profile</Link>,
            key: '1',
            url: '/profile'
        },
        {
            label: <Link to="/login">Logout</Link>,
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
                    Hoàng Thanh Tùng
                </div>
                <Dropdown menu={{ items }}> 
                    <Avatar size={44}></Avatar> 
                </Dropdown>
            </div>
        </Header>
    )
}

export default AppHeader
