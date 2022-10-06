import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//components

//pages
import OurStory from './pages/OurStory';
import Locations from './pages/Locations';
import LocationDetails from './pages/LocationDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OurStory/>} />
          <Route path="/locations" element={<Locations/>} />
          <Route path='/location/details/:location' element={<LocationDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App