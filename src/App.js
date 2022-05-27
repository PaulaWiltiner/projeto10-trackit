
import React from 'react';
import './assets/styles/reset.css';
import GlobalStyle from './assets/styles/globalStyle';
import { useState } from 'react';
import Login from './pages/Login'
import Register from './pages/Register'
import Habits from './pages/Habits'
import Historic from './pages/Historic'
import Today from './pages/Today'
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import TokenContext from "./contexts/TokenContext";

export default function App() {

  const [token, setToken] = useState('')
  const [photo, setPhoto] = useState('')

  return (
    <TokenContext.Provider value={{token, setToken,photo,setPhoto}}>
      <GlobalStyle />

        <BrowserRouter>

          <Routes>

            <Route  path='/' element={<Login/>} />
            <Route path='/register' element={<Register />}/>
            <Route path='/habits' element={<Habits />}/>
            <Route  path='/historic' element={<Historic/>} />
            <Route path='/today' element={<Today/>}/>

          </Routes>

        </BrowserRouter>
    </TokenContext.Provider>
  );
}