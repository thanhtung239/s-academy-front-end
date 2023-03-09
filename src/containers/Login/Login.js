import React from "react";
import "./login.scss"
import { Form, Input, Checkbox, Button, Card } from "antd";
import { USERNAME_REQUIRED, PASSWORD_REQUIRED } from "../../constants/messages";
import { Link } from "react-router-dom";

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-container">
            <div className="form-container">
                <Card className="login-card">
                    <Form
                        className="login-form"
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
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <div style={{display: 'flex', height: '100%'}}>
                                <Checkbox className="justify-content-start" style={{ flex: '1', }}>
                                    Remember me
                                </Checkbox>
                                <Link to="/register" style={{ flex: '1', textAlign: 'end', }}>
                                    Register now?
                                </Link>
                            </div>
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

export default Login
