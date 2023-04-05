import React from "react";
import { Card, Button } from "antd";
import './Card.scss'
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export const CourseCarouselCard = () => {
    return (
        <Card
            style={{
                width: 300,
                padding: '0px 20px',
                border: 0,
            }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            <Meta
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}

export const CourseCard = (props) => {
    const navigate = useNavigate();
    const courseData = props.data;
    const courseRoute = '/courses/' + courseData.id;

    return (
        <Card
            className="course-card"
            cover={
                <img
                    alt="example"
                    src={courseData.logo_path}
                />
            }
        >
            <Meta
                title={courseData.name}
                description="This is the description"
            />
            <Button className="course-card-button" onClick={() => navigate(courseRoute)}>
                Launch
            </Button>
        </Card>
    )
}
