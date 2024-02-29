import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import Students from './components/Students.jsx'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
