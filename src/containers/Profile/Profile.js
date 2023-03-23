import React from "react";
import { Avatar, Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Profile.scss"
import ProfileForm from "../../components/form/Profile/ProfileForm";

const Profile = () => {
    return (
        <div className="profile-component">
            <Row >
                <Col flex={12} className="profile-left">
                    <Card bordered={false}>
                        <div className="card-top">
                            <div className="card-title">Profile</div>
                        </div>
                        <div className="card-bottom">
                            <ProfileForm />
                        </div>
                    </Card>
                </Col>
                <Col flex={3} className="profile-right">
                    <Card className="profile-right-card" bordered={false}>
                        <div className="card-title"></div>
                        <div className="card-content">
                            <Avatar size={100} icon={<UserOutlined />} />
                            <div className="">
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: 5,
                                    marginBottom: 20,
                                    fontSize: 20,
                                }}
                                >Thanh Tung Hoang</div>
                                
                                <div>
                                    <div className="more-information">
                                        <CakeIcon />
                                        <div className="more-information-text">23/09/2000</div>
                                    </div>
                                    <div className="more-information">
                                        <LocationOnIcon />
                                        <div className="more-information-text">Ha Noi city</div>
                                    </div>
                                    <div className="more-information">
                                        <PhoneIphoneIcon />
                                        <div className="more-information-text">0986560999</div>
                                    </div>
                                    <div className="more-information">
                                        <EmailIcon />
                                        <div className="more-information-text">tung.thanh.h@samsung.com</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Profile
