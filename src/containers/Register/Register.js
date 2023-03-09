import React from "react";
import "./register.scss"
import { Form, Input, Button, Card } from "antd";
import { USERNAME_REQUIRED, PASSWORD_REQUIRED } from "../../constants/messages";

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="register-container">
            <div className="form-container">
                <Card className="register-card">
                    <div className="form-title">Register</div>
                    <Form
                        className="register-form"
                        name="basic"
                        labelCol={{span: 8,}}
                        wrapperCol={{span: 16,}}
                        style={{maxWidth: 600,}}
                        initialValues={{remember: true,}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                        label="Name"
                        name="name"
                        rules={[{
                            required: true,
                            message: USERNAME_REQUIRED,
                            },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                        label="Email"
                        name="email"
                        rules={[{
                            required: true,
                            message: USERNAME_REQUIRED,
                            },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true,
                            message: PASSWORD_REQUIRED,
                            },]}
                        >
                            <Input.Password id=""/>
                        </Form.Item>
                        <Form.Item
                        label="Repeat Password"
                        name="repeat_password"
                        rules={[{
                            required: true,
                            message: PASSWORD_REQUIRED,
                            },]}
                        >
                            <Input.Password id=""/>
                        </Form.Item>
                        <Form.Item
                        label="GEN ID"
                        name="gen_id"
                        rules={[{
                            required: true,
                            message: USERNAME_REQUIRED,
                            },]}
                        >
                            <Input type="number" />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                                }}
                        >
                            <Button type="primary" htmlType="submit" className="justify-content-start">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )    
}

export default Register
