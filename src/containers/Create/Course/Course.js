import React, { useState } from "react";
import { Card, Form, Input, Button, message, Upload } from "antd";
import { CloudUploadOutlined } from "@mui/icons-material";
import './Course.scss'

const CreateCourse = () => {
    const [fileList, setFileList] = useState([]);
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
      
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
    };
    /* eslint-enable no-template-curly-in-string */
    
    const onFinish = (values) => {
        console.log(values);
    };

    const uploadProps = {
        name: 'logo_file',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            // console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
          },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };
    
    return (
        <div className="create-course-container">
            <Card
                className="card-custom"
                title='Create a new course'
                bordered={false}
            >
                <Form
                    {...layout}
                    name="nest-messages"
                    className="create-course-form"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    validateMessages={validateMessages}
                >
                    <Form.Item name='name' label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="logo_path" label="Logo" rules={[{ required: true }]}>
                        <Upload
                            {...uploadProps}
                            listType="picture"
                            maxCount={1}
                        >
                            <Button
                                icon={<CloudUploadOutlined />}
                                style={{display: 'flex', alignItems: 'center'}}
                                >
                                <span style={{marginLeft: 10, paddingTop:3 }}>Click to Upload</span>
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        style={{ display: 'flex', justifyContent: 'center', }}>
                        <Button htmlType="submit" style={{background: '#57647E', color: '#FFFFFF'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default CreateCourse
