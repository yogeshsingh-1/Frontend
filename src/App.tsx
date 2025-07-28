// import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
// import  { useState } from 'react';
import Signup from './pages/Signup';
// import Auth from './pages/Auth';
const App = () => {
  // const [state,setState] = useState('signup');
  return (
    <>
   <Routes>
     <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      {/* <Route path='/auth' element={<Auth/>}/> */}
      <Route path="/blog/:id" element={<Blog/>}/>
   </Routes>
   </>
  )
}

export default App;