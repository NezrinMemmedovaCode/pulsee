import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from './layout/MainLayout';
import Home from './MainPages/Home/Home';
import Add from './MainPages/Add/Add';
import Wish from './MainPages/Wish/Wish';
import Admin from './MainPages/Admin/Admin';
import MainProvider from './context/MainProvider';

function App() {

  return (
    <>
    <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Admin" element={<Admin/>} />
         
          <Route path="/Add" element={<Add/>} />
          <Route path="/Wish" element={<Wish/>} />
        </Route>
      
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
    
  )
}

export default App
