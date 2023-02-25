import React from 'react'
import {BrowserRouter,Routes, Route, redirect, useNavigate} from "react-router-dom"
import Navmenu from './components/Menu/Navmenu'
import Registration from './components/Registration/Registration'
 import {Toaster} from "react-hot-toast"
import Login from './components/Login/Login'
import CreatePost from './components/CreatePost/CreatePost'
import Allpost from './components/AllPost/Allpost'
import SelectPost from './components/AllPost/SelectPost'
import Profile from './components/ProfileUpdate/Profile'
import { getToken } from './helper/SesssionHelper'
import Home from './components/Home/Home'



const App = () => {
  
  if(getToken()){
    return(
      <BrowserRouter>
      <Toaster position="top-center"/>
      <Navmenu/>
      <Home/>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
  <Route path='/create' element={<CreatePost/>} ></Route>
  <Route path='/' element={<Allpost/>} ></Route>
  
  <Route path='/selectpost/:id' element={<SelectPost/>} ></Route>
  </Routes>
      </BrowserRouter>
    )
  }else{
    return (
      <BrowserRouter>
      
      
     <Toaster position="top-center"/>
      
     <Routes>
      <Route path='/' element={<Login/>} />
    <Route path='/registration' element={<Registration/>} />
    <Route path='/login' element={<Login/>} ></Route>
    
  
      </Routes>
  
  
      
      
      </BrowserRouter>
  
  
    )
  }
 
}

export default App