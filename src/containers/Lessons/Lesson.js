import React from "react";
import { Row, Col, Menu, Tabs,  Empty } from "antd";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import './Lesson.scss'

const Lesson = () => {
    const paramsId = useParams();
    const titleExamples = [
        "Title Example",
        "Title Example",
        "Title Example",
        "Title Example",
        "Title Example",
        "Title Example",
        "Title Example",
        "Title Example",
        "Title Example",

    ]

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: `Information`,
          children: <Empty />,
        },
        {
          key: '2',
          label: `Discussion`,
          children: <Empty />,
        },
        {
          key: '3',
          label: `Note`,
          children: <Empty />,
        },
    ];
    
    return (
        <div className="lesson-container">
            <Row style={{height: '100%'}}>
                <Col span={5}>
                    <div className="left-side-container">
                        <Menu className="menu" mode="inline" defaultSelectedKeys={['1']}>
                            {
                                titleExamples.map((item) => {
                                    return (
                                        <Menu.Item key={item.key}>
                                            <Link>
                                                {item}
                                            </Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </div>
                </Col>
                <Col span={19}>
                    <div className="right-side-container">
                        <div className="video-container">
                            <ReactPlayer
                                url='<https://www.youtube.com/watch?v=8Ulhv_q85pY&t=>'
                                width="889px"
                                height="500px"
                            />
                        </div>
                        <div className="tabs-container">
                            <Tabs
                                defaultActiveKey="1"
                                items={items}
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
