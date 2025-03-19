import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HelmetProvider} from 'react-helmet-async';
import "leaflet/dist/leaflet.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop.jsx";

import Home from "./pages/Home";
import About from "./pages/About";
import Cookies from "./pages/Cookies";
import Facilities from "./pages/Facilities";
import Member from "./pages/Member";
import Policy from "./pages/Policy";
import Shop from "./pages/Shop";
import Training from "./pages/Training";
import NewsAndEvents from "./pages/NewsAndEvents";

import "./styles.css";

function App() {
    return (
        <HelmetProvider>
            <Router>
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
