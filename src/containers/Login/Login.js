import React, {useState} from "react";
import axios from "axios";
import "./login.scss"
import { Form, Input, Checkbox, Button, Card } from "antd";
import { USERNAME_REQUIRED, PASSWORD_REQUIRED } from "../../constants/messages";
import { Link } from "react-router-dom";
import { postAPI } from "../../api/config";
import { LOGIN } from "../../constants/api";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     // Create the submit method.
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        const successFn = (data) => {
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
            window.location.href = '/'
        }

        postAPI(LOGIN, user, successFn);  
    }

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
                            <Input onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true,
                            message: PASSWORD_REQUIRED,
                            },]}
                        >
                            <Input.Password onChange={(e) => setPassword(e.target.value)} />
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
                            <Button type="primary" htmlType="submit" className="justify-content-start" onClick={handleSubmit}>
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
