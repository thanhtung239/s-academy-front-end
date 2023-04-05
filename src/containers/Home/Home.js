import React, { useContext } from "react";
import { Button, Col, Image, Row } from "antd";
import HomeCarousel from "../../components/carousel/HomeCarousel";
import { HomeComponentTitle } from "../../components/title/ComponentTitle";
import { HomeStatistics } from "../../components/statistics/Statistic";
import HomeBackGroundTop from "../../assets/images/home_background_top.jpg";
import { useNavigate } from "react-router-dom";
import { statisticsData } from "../../constants/utils";
import { AppContext } from "../../contexts/AppContext";
import "./Home.scss"


const Home = () => {
    const navigate = useNavigate();
    const { userData } = useContext(AppContext);

    return (
        <div className="home-component">
            <div className="background-home-container">
                <Image alt="Course background" src={HomeBackGroundTop} preview={false}></Image>
                <div className="greetings-and-button">
                    <div className="greetings">Have a beautiful day, {userData.last_name}!</div>
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
