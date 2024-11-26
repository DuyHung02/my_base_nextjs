import styles from '@/app/auth/register/page.module.css';
import { Button, Form, Input } from 'antd';
import React from 'react';

const SignUpComponent = () => {
  return(
    <div>
      <Form
        className={styles.registerForm}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <Form.Item className="p-5">
          <Input placeholder="Họ Tên (*)" />
        </Form.Item>
        <Form.Item className="p-5">
          <Input placeholder="Số điện thoại (*)" />
        </Form.Item>
        <Form.Item className="p-5">
          <Input placeholder="Email (*)" />
        </Form.Item>
        <Form.Item className="p-5">
          <Input placeholder="Nhập mật khẩu (*)" />
        </Form.Item>
        <Form.Item className="p-5">
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