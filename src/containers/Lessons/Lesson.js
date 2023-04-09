import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Tabs } from "antd";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player/file';
import './Lesson.scss'
import { getAPI } from "../../api/config";
import { BASE_URL, GET_LESSONS_LIST } from "../../constants/api";
import { lessonTabItems } from "../../constants/utils";

const Lesson = () => {
    const paramsId = useParams();
    const [lessonData, setLessonData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const lessonCurrentData = lessonData[currentIndex];

    useEffect(() => {
        const params = { course_id: paramsId.course_id };

        const successFn = (data) => {
            setLessonData(data);
        }

        getAPI(GET_LESSONS_LIST, successFn, params)
    }, [])
    
    const titleList = lessonData.map((item, index) => {
        return (
            <Menu.Item key={item.id} >
                <Link onClick={() => setCurrentIndex(index)}>
                    {item.title}
                </Link>
            </Menu.Item>
        )
    })
    
    return (
        <div className="lesson-container">
            <Row style={{height: '100%'}}>
                <Col span={5}>
                    <div className="left-side-container">
                        <Menu className="menu" mode="inline" defaultSelectedKeys={['1']}>
                            {titleList}
                        </Menu>
                    </div>
                </Col>
                <Col span={19}>
                    <div className="right-side-container">
                        <div className="video-container">
                            {lessonCurrentData &&
                                <ReactPlayer
                                url={BASE_URL + '/' + lessonCurrentData.video_path}
                                controls={true}
                                width="889px"
                                height="500px"
                                />
                            }
                        </div>
                        <div className="tabs-container">
                            <Tabs
                                defaultActiveKey="1"
                                items={lessonTabItems}
                                size="large"
                                tabBarGutter={70}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Lesson
