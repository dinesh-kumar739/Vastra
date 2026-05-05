import React,{useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Orderes from './pages/Orderes'
import Login from './pages/Login'
import Lists from './pages/Lists'
import Add from './pages/Add'
import { adminDataContext } from './context/AdminContext'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const {adminData} = useContext(adminDataContext)
  return (
    <>
      <ToastContainer />
      {!adminData?<Login/>:<>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/orderes" element={<Orderes/>} />
      </Routes>
      </>}
    </>
  )
}

export default App