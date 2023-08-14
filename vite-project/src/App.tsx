import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/ComponentsLandingPage/home'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import AccountantLoginPage from './Components/ComponentsAccountLogin/AccountantLoginPage'

function App() {

  return (
  <div className='App'>
    <Navbar/>

    <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/accountant-login-page" element = {<AccountantLoginPage/>}/>

    </Routes>
    </div>
  )
}

export default App
