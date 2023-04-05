import React, { useContext }from "react";
import {
    DesktopOutlined,
    HomeOutlined,
    LaptopOutlined,
} from '@ant-design/icons';
import { Affix, Layout, Menu } from 'antd';
import { AppContext } from "../../contexts/AppContext"; 
import { Link } from "react-router-dom";
import "./base.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSider = () => {
    const { collapsed } = useContext(AppContext);

    return (
        <Sider className="app-sider" trigger={null} collapsible collapsed={collapsed}>
            <Affix offsetTop={10}>
                <div>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="Home">
                            <Link to="/">
                                <HomeOutlined />
                                <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="Courses" title={
                            <span>
                                <DesktopOutlined />
                                <span>Courses</span>
                            </span>
                        }>
                            <Menu.Item key="All Courses">
                                <Link to="/courses">All Courses</Link>
                            </Menu.Item>
                            <Menu.Item key="My Courses">
                                <Link to="/courses">My Courses</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="Workspaces" title={
                            <span>
                                <LaptopOutlined />
                                <span>Workspaces</span>
                            </span>
                        }>
                            <Menu.Item key="All Workspaces">
                                <Link to="/workspaces">All Workspaces</Link>
                            </Menu.Item>
                            <Menu.Item key="My Workspaces">
                                <Link to="/workspaces">My Workspaces</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </Affix>
            
        </Sider>
    );
}

export default AppSider
