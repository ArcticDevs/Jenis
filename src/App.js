import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//components

//pages
import OurStory from './pages/OurStory';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OurStory/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App