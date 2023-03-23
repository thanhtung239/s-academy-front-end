import React from "react";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './AllCourses.scss'

const { Search } = Input;

const AllCourses = () => {
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
                <div className="header-welcome-text">Hi Hoang Thanh Tung</div>
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
            </div>
        </div>
    )
}

export default AllCourses
