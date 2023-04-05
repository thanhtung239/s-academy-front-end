import React, { useContext } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Space } from "antd";
import "./ProfileForm.scss"
import { AppContext } from "../../../contexts/AppContext";

const ProfileForm = () => {
    const { form } = Form.useForm();
    const {userData} = useContext(AppContext);

    return (
        <Form
            className="profile-form"
            form={form}
            layout="vertical"
        >
            <Row>
                <Col flex={1} className="left-item">
                    <Form.Item
                        name="first_name"
                        label="First name"
                        rules={[{ required: true }]}
                    >
                        <Input size="large" defaultValue={() => userData.first_name } />
                    </Form.Item>
                </Col>
                <Col flex={1} className="right-item">
                    <Form.Item
                        name="last_name"
                        label="Last name"
                        rules={[{ required: true }]}
                    >
                        <Input size="large" defaultValue={userData.last_name} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col flex={1} className="left-item">
                    <Form.Item
                        name="email"
                        label="Email"
                    >
                        <Input
                            size="large"
                            defaultValue={userData.email}
                            disabled={true}
                        />
                    </Form.Item>
                </Col>
                <Col flex={1} className="right-item">
                    <Form.Item
                        name="company"
                        label="Company"
                    >
                        <Input size="large" defaultValue={userData.company} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col flex={1} className="left-item">
                    <Form.Item
                        name="department"
                        label="Department"
                    >
                        <Input size="large" defaultValue={userData.department}/>
                    </Form.Item>
                </Col>
                <Col flex={1} className="right-item">
                    <Form.Item
                        name="address"
                        label="Address"
                    >
                        <Input size="large" defaultValue={userData.address} />
                    </Form.Item>
                </Col> 
            </Row>
            <Row>
                <Col span={12} className="left-item">
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
                            defaultValue={userData.mobile_number}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} className="right-item">
                    <Form.Item
                        name="birthday"
                        label="Date of birth"
                    >
                        <DatePicker />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col flex={1}>
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
