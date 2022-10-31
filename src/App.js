import { useEffect } from "react";
// import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

// pages
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";
import ContactUs from "./pages/ContactUs";
import Jobs from './pages/Jobs';
import Shop from "./pages/Shop";
import Franchising from "./pages/Franchising";

// const Home = lazy(() => import('./pages/Home'));

const App = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const locationArr = [
        { name: "ATLANTA, GA", value: "atlanta-ga" }
      ];

    return (
        <div className="app">
            <Navbar />
            {/* <Suspense> */}
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/our_story" element={<OurStory />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/locations" element={<Locations locationArr={locationArr}/>} />
                <Route path="/location/details/:location" element={<LocationDetails locationArr={locationArr}/>} />
                <Route path="/contact-us" element={<ContactUs/>} />
                <Route path="/franchising" element={<Franchising/>} />
            </Routes>
            {/* </Suspense> */}
            <Footer />
        </div>
    );
};

export default App;
