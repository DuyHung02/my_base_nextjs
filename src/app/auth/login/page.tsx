'use client';

import LoginComponent from '@/components/auth/login/LoginComponent';
import styles from './page.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { apiLogin } from '@/services/auth';
import { setAuthState } from '@/redux/slices/authSlice';
import { ILogin } from '@/types/auth';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleLogin = async (payload: ILogin) => {
    const response = await apiLogin(payload);
    if (response?.status === 201) {
      dispatch(setAuthState(response.data.data));
      push('/messages');
    }
  };

  return (
    <div className="container-fluid">
      <div className={styles.loginForm}>
        <div className="mb-5-p text-center">Login Form</div>
        <LoginComponent onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
