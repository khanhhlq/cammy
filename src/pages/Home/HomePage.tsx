import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config'
import LoginPage from '../Login/LoginPage';

const HomePage = () => {


  return (
    <div className='home'>
        <h1>trang chủ</h1>
      </div>
  )
}

export default HomePage