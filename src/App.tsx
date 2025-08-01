// import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
// import  { useState } from 'react';
import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
// import Update from './components/Update';
import { useState } from 'react';
import Publish from './pages/Publish';

// import Auth from './pages/Auth';
const App = () => {
  // const [state,setState] = useState('signup');
    const [isOpen, setIsOpen] = useState(false);
  return (
    <> 
  
      {/* <Update/> */}
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />

         <Route path="/publish" element={<Publish />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
          
         {/* <Route path="/update/:id" element={<Update onClose={() => setIsOpen(false)}  />} /> */}
      </Routes>
    </>
  )
}

export default App;