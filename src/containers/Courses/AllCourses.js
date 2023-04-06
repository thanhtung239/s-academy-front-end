import React, { useContext, useEffect, useState } from "react";
import { Col, Input, Pagination, Row, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './AllCourses.scss'
import { CourseCard } from "../../components/card/Card";
import { getAPI } from "../../api/config";
import { GET_COURSES_LIST } from "../../constants/api";
import { AppContext } from "../../contexts/AppContext";

const { Search } = Input;

const AllCourses = () => {
    const [ coursesData, setCoursesData ] = useState([]);
    const { userData } = useContext(AppContext);

    const searchParams = {
        keyword: '',
        sortedBy: ''
    }

    useEffect(() => {
        const successFn = (data) => {
            setCoursesData(data);
        }
    
        getAPI(GET_COURSES_LIST, successFn);
    }, [])
    
    const listCourses = coursesData.map((course) => {
        return (
            <Col className="gutter-row" span={6}><CourseCard data={course} /></Col>
        )
    });
    
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
    );
      
    const onSearch = (value) => console.log(value);

    return (
        <div className="all-course-layout">
            <div className="all-course-header">
                <div className="header-welcome-text">Hi, { userData.last_name }</div>
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
                <Pagination current={1} defaultPageSize={20} total={500} />
            </div>
        </div>
    )
}

export default AllCourses
