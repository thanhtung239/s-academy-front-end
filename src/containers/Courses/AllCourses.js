import React, { useContext, useEffect, useState } from "react";
import { Col, Input, Pagination, Row, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './AllCourses.scss'
import { CourseCard } from "../../components/card/Card";
import { getAPI } from "../../api/config";
import { GET_COURSES_LIST } from "../../constants/api";
import { AppContext } from "../../contexts/AppContext";
import { ALL_COURSES_WELCOME } from "../../constants/messages";

const { Search } = Input;

const AllCourses = () => {
    const [ coursesData, setCoursesData ] = useState([]);
    const { userData } = useContext(AppContext);

    const fetchCoursesList = (value) => {
        const params = {}
        if (value) {
            params.search = value;
        }

        const successFn = (data) => {
            setCoursesData(data);
        }
    
        getAPI(GET_COURSES_LIST, successFn, params);
    }

    useEffect(() => {
        fetchCoursesList();
    }, [])
    
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
    );
      
    const onSearch = (value) => {
        fetchCoursesList(value)
    };

    const listCourses = coursesData.map((course) => {
        return (
            <Col key={course.id} className="gutter-row" span={6}><CourseCard data={course} /></Col>
        )
    });

    return (
        <div className="all-course-layout">
            <div className="all-course-header">
                <div className="text-space">
                    <div className="header-welcome-text">Hi, {userData.last_name}!</div>
                    <div className="header-welcome-text">{ALL_COURSES_WELCOME}</div>
                </div>
            </div>
            <div className="all-course-content">
                <Space className="content-top">
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                </Space>
                <div className="list-courses-container">
                    <Row gutter={[16, 24]}>
                        {listCourses}
                    </Row>
                </div>
            </div>
            <div className="all-courses-bottom">
                <Pagination current={1} defaultPageSize={20} total={listCourses.length} />
            </div>
        </div>
    )
}

export default AllCourses
