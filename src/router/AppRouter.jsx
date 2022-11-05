import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from '../components/navbar'
import About from '../pages/about'
import Details from '../pages/details'
import Home from '../pages/home'
import Login from '../pages/login'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='about' element={<PrivateRouter/>}>
          <Route path='' element={<About/>} />
        </Route>
        <Route path='details' element={<PrivateRouter/>}>
          <Route path='' element={<Details/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter