import styles from '@/app/auth/register/page.module.css';
import { Button, Form, Input } from 'antd';
import React from 'react';
import {IRegister, IRegisterComponent } from '@/types/auth';

const SignUpComponent: React.FC<IRegisterComponent> = ({ onSubmit }) => {
  const handleOnSubmit = (registerData: IRegister) => {
    console.log('register: ', registerData);
    onSubmit(registerData);
  };
  return(
    <div>
      <Form
        className={styles.registerForm}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleOnSubmit}
      >
        <Form.Item className="p-5"  rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder="Họ Tên (*)" />
        </Form.Item>
        <Form.Item className="p-5"  rules={[{ required: true, message: 'Please input your phone number!' }]}>
          <Input placeholder="Số điện thoại (*)" />
        </Form.Item>
        <Form.Item className="p-5"  rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input placeholder="Email (*)" />
        </Form.Item>
        <Form.Item className="p-5"  rules={[{ required: true, message: 'Please input your password' }]}>
          <Input placeholder="Nhập mật khẩu (*)" />
        </Form.Item>
        <Form.Item className="p-5"  rules={[{ required: true, message: 'Please input your ConfirmPassword!' }]}>
          <Input placeholder="Nhập lại mật khẩu (*)" />
        </Form.Item>
        <div className={`${styles.btn} p-5`}>
          <Button type="primary" htmlType="submit" className={styles.btnNoneColor}>
            Về trang đăng nhập
          </Button>
          <Button type="primary" htmlType="submit" className={styles.btnColor}>
            Đăng ký
          </Button>
        </div>
      </Form>
    </div>
  )
}
export default SignUpComponent