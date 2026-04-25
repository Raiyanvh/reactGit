import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Home from './components/Home'
import Login from './Login'
import SignUp from './SignUp'
import Footer from './Footer'
import Services from './components/services'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
