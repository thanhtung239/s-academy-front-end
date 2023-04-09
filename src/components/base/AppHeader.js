import React, { useContext } from "react";
import { Avatar, Layout, Dropdown} from "antd";
import { AppContext } from "../../contexts/AppContext";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import "./base.css";
import { items } from "../../constants/utils";

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
                <Dropdown menu={{items}}> 
                    <Avatar size={44} icon={<UserOutlined />}></Avatar> 
                </Dropdown>
            </div>
        </Header>
    )
}

export default AppHeader
