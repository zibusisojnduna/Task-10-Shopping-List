import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './pages/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ShoppingList from './pages/ShoppingList'
import Privacy from './pages/Privacy'
import NoPage from './pages/NoPage'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Landing/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='shoppinglist' element={<ShoppingList/>}/>
          <Route path='privacy' element={<Privacy/>}/>
          <Route path='*' element={<NoPage/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
