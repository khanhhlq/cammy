import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import PageHome from './pages/Home/PageHome';
import './App.css';

function App() {
  return (
    <div className="App">
        <PageHome />
    </div>
  );
}

export default App;
