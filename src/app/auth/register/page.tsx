'use client';
import React from 'react';
import styles from './page.module.css';
import SignUpComponent from '@/components/auth/register/SignUpComponent';

 const RegisterPage = () => {
   return(
     <div className="container-fluid">
       <h2 className = {styles.register}>Đăng Ký Tài khoản</h2>
       <SignUpComponent />
     </div>
   )
 }

 export default RegisterPage;