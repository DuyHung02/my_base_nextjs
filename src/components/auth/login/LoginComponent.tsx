import React from 'react';
import { Button, Form, Input } from 'antd';
import { ILogin, ILoginComponent } from '@/types/auth';

const LoginComponent: React.FC<ILoginComponent> = ({ onSubmit }) => {
  const handleOnSubmit = (loginData: ILogin) => {
    console.log('login: ', loginData);
    onSubmit(loginData);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleOnSubmit}
      onFinishFailed={() => {}}
    >
      <Form.Item<ILogin>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<ILogin>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginComponent;
