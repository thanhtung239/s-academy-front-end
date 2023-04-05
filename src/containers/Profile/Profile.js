import React, {useContext} from "react";
import { Avatar, Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AppContext } from "../../contexts/AppContext";
import "./Profile.scss"
import ProfileForm from "../../components/form/Profile/ProfileForm";

const Profile = () => {
    const { userData } = useContext(AppContext);
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
                                >
                                    {userData.first_name + " " + userData.last_name}
                                </div>
                                
                                <div>
                                    <div className="more-information">
                                        <CakeIcon />
                                        <div className="more-information-text">{userData.birthday}</div>
                                    </div>
                                    <div className="more-information">
                                        <LocationOnIcon />
                                        <div className="more-information-text">{userData.address}</div>
                                    </div>
                                    <div className="more-information">
                                        <PhoneIphoneIcon />
                                        <div className="more-information-text">{userData.mobile_number}</div>
                                    </div>
                                    <div className="more-information">
                                        <EmailIcon />
                                        <div className="more-information-text">{userData.email}</div>
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
