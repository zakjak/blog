import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import MenuList from './components/MenuList'
import Footer from './components/Footer'
import axios from 'axios'
import Profile from './pages/Profile'
import Add from './pages/Add'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true


function App() {

  return (
    <div className=''>
    <Navbar />
    <MenuList />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/add/:id' element={<Add />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
