import React from "react";
import { Button, Col, Image, Row } from "antd";
import HomeCarousel from "../../components/carousel/HomeCarousel";
import { HomeComponentTitle } from "../../components/title/ComponentTitle";
import { HomeStatistics } from "../../components/statistics/Statistic";
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';
import HomeBackGroundTop from "../../assets/images/home_background_top.jpg";
import { useNavigate } from "react-router-dom";
import "./Home.scss"

const Home = () => {
    const navigate = useNavigate()
    const statisticsData = [
        {
            title: 'Courses',
            icon: <SchoolIcon />,
            data: 1000
        },
        {
            title: 'Users',
            icon: <PeopleAltSharpIcon />,
            data: 1234
        },
        {
            title: 'Workspaces',
            icon: <DevicesTwoToneIcon />,
            data: 789
        }
    ]

    return (
        <div className="home-component">
            <div className="background-home-container">
                <Image alt="Course background" src={HomeBackGroundTop} preview={false}></Image>
                <div className="greetings-and-button">
                    <div className="greetings">Have a beautiful day, Tung!</div>
                    <Button onClick={() => navigate('/courses')} className="button">Let's start studying</Button>
                </div>
            </div>
            <HomeCarousel />
            <HomeCarousel />
            <HomeCarousel />
            <div className="statistics-container">
                <HomeComponentTitle title="Statistics" />
                <div className="statistics-content">
                    <Row style={{width: '100%'}}>
                        {
                            statisticsData.map((data) => {
                                return <Col span={8}><HomeStatistics data={data} /></Col>
                            })
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home
