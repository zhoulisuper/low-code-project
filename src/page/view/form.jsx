import { Button, Checkbox, Form, Input,Select ,Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';

const { Option } = Select;


const App = () => {

  const [label, setlabel] = useState('课程名称');

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = ({key})=>{
    // e.stopPropagation()
    console.log(key)
    setlabel(key)
  }


  const menu = (
    <Menu
    onClick={handleChange}
      items={[
        {
          key: '课程名称',
          label:'课程名称',
        },
        {
          key: '课程ID',
          label: '课程ID',
        },
        {
          key: '讲师ID',
          label: '讲师ID',
        },
        {
          key: '课程编码',
          label: '课程编码',
        },
      ]}
    />
  );

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={
          <Dropdown overlay={menu}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                {label}
              </Space>
            </a>
          </Dropdown>
        }
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;