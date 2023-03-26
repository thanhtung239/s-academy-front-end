import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const CourseCard = () => {
    return (
        <Card
            style={{ width: 300 }}
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

export default CourseCard
