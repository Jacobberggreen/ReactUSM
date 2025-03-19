import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HelmetProvider} from 'react-helmet-async';
import "leaflet/dist/leaflet.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop.jsx";

import Home from "./pages/home";
import About from "./pages/about";
import Cookies from "./pages/cookies";
import Facilities from "./pages/facilities";
import Member from "./pages/member";
import Policy from "./pages/policy";
import Shop from "./pages/shop";
import Training from "./pages/training";
import NewsAndEvents from "./pages/newsAndEvents";

import "./styles.css";

function App() {
    return (
        <HelmetProvider>
            <Router basename="/">
                <ToTop/>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/cookies" element={<Cookies/>}/>
                    <Route path="/facilities" element={<Facilities/>}/>
                    <Route path="/member" element={<Member/>}/>
                    <Route path="/policy" element={<Policy/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/training" element={<Training/>}/>
                    <Route path="/newsAndEvents" element={<NewsAndEvents/>}/>
                </Routes>
                <Footer/>
            </Router>
        </HelmetProvider>
    );
}

export default App;
