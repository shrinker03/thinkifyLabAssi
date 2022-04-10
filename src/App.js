import React from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";
import EmailBody from './components/EmailBody';
import Home from './components/Home';

const App = () => {
  return (
    <div style={{background: '#F4F5F9', color: '#636363'}} >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/body/:id' element={<EmailBody />} />
      </Routes>
    </div>
  )
}

export default App