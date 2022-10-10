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

    const locationArr = [
        { name: "ATLANTA, GA", value: "atlanta-ga" },
        { name: "BIRMINGHAM, AL", value: "Birmingham-al" },
        { name: "CHARLESTON, SC", value: "charleston-sc" },
        { name: "CHICAGO, IL", value: "chicago-il" },
        { name: "DALLAS, TX", value: "dallas-tx" },
        { name: "COLUMBUS, OH", value: "columbus-oh" },
        { name: "CHARLOTTE, NC", value: "charlotte-nc" },
        { name: "DURHAM, NC", value: "durham-nc" },
        { name: "WASHINGTON, DC", value: "washington-dc" },
        { name: "TAMPA, FL", value: "tampa-fl" }
      ];

    return (
        <div className="app">
            <Navbar />
            {/* <Suspense> */}
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/our_story" element={<OurStory />} />
                <Route path="/locations" element={<Locations locationArr={locationArr}/>} />
                <Route path="/location/details/:location" element={<LocationDetails locationArr={locationArr}/>} />
            </Routes>
            {/* </Suspense> */}
            <Footer />
        </div>
    );
};

export default App;
