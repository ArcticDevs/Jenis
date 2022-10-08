import { useEffect } from "react";
// import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import OurStory from "./pages/OurStory";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";

// const Home = lazy(() => import('./pages/Home'));

const App = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="app">
            <Navbar />
            {/* <Suspense> */}
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<OurStory />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/location/details/:location" element={<LocationDetails />} />
            </Routes>
            {/* </Suspense> */}
            <Footer />
        </div>
    );
};

export default App;
