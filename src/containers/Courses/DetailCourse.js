import React from "react";
import { Col, Row, Button } from "antd";
import { useLocation, useNavigate, useParams } from "react-router";
import "./DetailCourse.scss"
import { RowInfoCourseCard } from "../../components/common/Common";
import { detailCourseData } from "../../constants/utils";


const DetailCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="detail-course-container">
            <Row gutter={16}>
                <Col span={17}>
                    <div className="detail-course-left-side">
                        <div className="detail-course-overview">
                            <div className="title">Title</div>
                            <div className="overview">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end', paddingBottom: 10}}>
                                <Button type="primary" onClick={() => navigate(location.pathname + '/lessons/1')}>
                                    Start Learning
                                </Button>
                            </div>
                        </div>
                        <div className="list-lesson-space"></div>
                    </div>
                </Col>
                <Col span={7}>
                    <div className="detail-course-right-side">
                        <div>
                            <div className="title">
                                <div>Information</div>
                            </div>
                            <div className="content">
                                {
                                    detailCourseData.map((item) => {
                                        return (
                                            <RowInfoCourseCard title={item.title} icon={item.icon} data={item.data} />
                                        )
                                    })
                                }
                            </div>
                            <div className="bottom"></div>
                        </div>
                        <div></div>
                    </div>
                </Col>
            </Row>      
        </div>
    )
}

export default DetailCourse
