import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';

import { auth } from './firebase/config'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import './App.css';

const App = () => {
  const [loggedInUser, loading, __error] = useAuthState(auth)
  if (loading) return <h1>LOADING ..........</h1>
  if (!loggedInUser) return <LoginPage />
  if (loggedInUser) return <HomePage />
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path='home' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
