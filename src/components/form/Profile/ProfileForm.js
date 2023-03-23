import React from "react";
import { Button, Col, DatePicker, Form, Input, Row, Space } from "antd";
import "./ProfileForm.scss"

const ProfileForm = () => {
    const { form } = Form.useForm();

    return (
        <Form
            className="profile-form"
            form={form}
            layout="vertical"
        >
            <Row>
                <Col flex={1} className="left-item">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col flex={1} className="right-item">
                    <Form.Item
                        name="email"
                        label="Email"
                    >
                        <Input
                            size="large"
                            defaultValue="tung.thanh.h@samsung.com"
                            disabled={true}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col flex={1} className="left-item">
                    <Form.Item
                        name="company"
                        label="Company"
                    >
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col flex={1} className="right-item">
                    <Form.Item
                        name="department"
                        label="Department"
                    >
                        <Input size="large" />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col flex={1} className="left-item">
                    <Form.Item
                        name="address"
                        label="Address"
                    >
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col flex={1} className="right-item">
                    <Form.Item
                        name="phone_number"
                        label="Mobile"
                    >
                        <Input
                            size="large"
                            onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col flex={1} className="left-item">
                    <Form.Item
                        name="birthday"
                        label="Date of birth"
                    >
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col flex={1} className="right-item">
                    <Form.Item
                        name="description"
                        label="Description"
                    >
                        <Input.TextArea rows={4}/>
                    </Form.Item>
                </Col>
            </Row>
            <Space className="button-space">
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Space>`
        </Form>
    )
}

export default ProfileForm
