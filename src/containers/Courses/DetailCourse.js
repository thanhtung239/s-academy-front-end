import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import { useLocation, useNavigate, useParams } from "react-router";
import "./DetailCourse.scss"
import { RowInfoCourseCard } from "../../components/common/Common";
import { detailCourseData } from "../../constants/utils";
import { getAPI } from "../../api/config";
import { COURSE_USER, GET_DETAIL_COURSE } from "../../constants/api";
import { AppContext } from "../../contexts/AppContext";


const DetailCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const routeParams = useParams();
    const { userData } = useContext(AppContext);
    const currentUser = userData;
    const [courseData, setCourseData] = useState({});
    const [checkJoined, setCheckJoined] = useState(false);
    

    const checkJoinedTheCourse = () => {
        console.log(userData)
        
        const params = {
            'user_id': userData.id,
            'course_id': routeParams.course_id
        }

        const successFn = (data) => {
            console.log(data)
        }

        getAPI(COURSE_USER, successFn, params)
    }

    useEffect(() => {
        const params = {'id': routeParams.course_id};
        const successFn = (data) => {
            setCourseData(data.shift())
        }

        

        getAPI(GET_DETAIL_COURSE, successFn, params)
        
    }, [])

    checkJoinedTheCourse()
    
    const LearningButton = () => {
        return checkJoined ? <Button className="button" onClick={() => navigate(location.pathname + '/lessons/1')}>
                                <div>Keep Learning</div>
                            </Button>
                           : <Button className="button" onClick={() => navigate(location.pathname + '/lessons/1')}>
                            <div>Start Learning</div>
                            </Button>
    }
    
    return (
        <div className="detail-course-container">
            <Row gutter={16}>
                <Col span={17}>
                    <div className="detail-course-left-side">
                        <div className="detail-course-overview">
                            <div className="title">{courseData.name}</div>
                            <div className="overview">{courseData.description}</div>
                            <div style={{display: 'flex', justifyContent: 'flex-end', paddingBottom: 10}}>
                                <LearningButton />
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
                                    detailCourseData.map((item, index) => {
                                        return (
                                            <RowInfoCourseCard key={index} title={item.title} icon={item.icon} data={courseData} />
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
