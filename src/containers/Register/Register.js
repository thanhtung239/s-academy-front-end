import React, { useState } from "react";
import axios from "axios";
import "./register.scss"
import { Form, Input, Button, Card, Alert } from "antd";
import { USERNAME_REQUIRED, PASSWORD_REQUIRED } from "../../constants/messages";
import { Link } from "react-router-dom";

const Register = () => {
    const [success, setSuccess] = useState(false);
    const [emailExist, setEmailExist] = useState(false);

    const onFinish = async (values) => {
        try {
            await axios.post('http://localhost:8000/api/register/', values);
            setSuccess(true)
        } catch (error) {
            console.log(error.response.data.email)
            setSuccess(false)
            setEmailExist(true)
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="register-container">
            <div className="form-container">
                {
                    success && <Alert
                    className="register-success-alert"
                    message="You have successfully registered a user!"
                    type="success"
                    showIcon
                    closable
                    action={
                        <Button style={{marginLeft: 20}} size="small" type="primary">
                          <Link to="/login">Login</Link>
                        </Button>
                    }
                    onClose={() => setSuccess(false)}
                    />
                }
                {
                    emailExist && <Alert
                    className="register-success-alert"
                    message="Email already exists!"
                    type="error"
                    showIcon
                    closable
                    onClose={() => setEmailExist(false)}
                    />
                }
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
                        label="First name"
                        name="first_name"
                        rules={[{
                            required: true,
                            message: USERNAME_REQUIRED,
                            },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                        label="Last name"
                        name="last_name"
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
                        label="Repeat password"
                        name="repeat_password"
                        rules={[{
                            required: true,
                            message: PASSWORD_REQUIRED,
                            },]}
                        >
                            <Input.Password id=""/>
                        </Form.Item>
                        <Form.Item label="GEN ID" name="gen_id">
                            <Input type="number" />
                        </Form.Item>

                        <Form.Item wrapperCol={{
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
