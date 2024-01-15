import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import TopBar from './components/TopBar'
import MenuList from './components/MenuList'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <TopBar />
    <MenuList />
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    <Footer />
    </>
    
  )
}

export default App
