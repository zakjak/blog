import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import MenuList from './components/MenuList'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <MenuList />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
