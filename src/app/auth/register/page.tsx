'use client';
import React from 'react';
import styles from './page.module.css';
import SignUpComponent from '@/components/auth/register/SignUpComponent';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { IRegister } from '@/types/auth';
import { apiRegister } from '@/services/auth';
import { setAuthState } from '@/redux/slices/authSlice';

 const RegisterPage = () => {

   const dispatch = useDispatch();
   const { push } = useRouter();

   const handleRegister = async (payload: IRegister) => {
     const response = await apiRegister(payload);
     if (response?.status === 201) {
       dispatch(setAuthState(response.data.data));
       push('/messages');
     }
   };
   return(
     <div className="container-fluid">
       <h2 className = {styles.register}>Đăng Ký Tài khoản</h2>
       <SignUpComponent onSubmit={handleRegister}  />
     </div>
   )
 }

 export default RegisterPage;