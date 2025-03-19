import React from 'react';
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet-async';
import config from '../config.json';

import HeroText from '../components/HeroText';
import VideoControls from '../components/VideoControls';
import NavClassScrolled from "../components/NavClassScrolled.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from '../components/AnimatedElements.jsx';
import {LoadingScreen} from "../components/LoadingScreen.jsx";
import NewsList from "../components/NewsList.jsx";
import EventsList from "../components/EventsList.jsx";
import Marquee from "../components/Marquee.jsx";

const TITLE = config.SITE_TITLE;
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class Home extends React.Component {
    componentDidMount() {
        LoadingScreen();
        AnimatedElements();
    }

    render() {
        return (
            <main id="home">
                <NavClassScrolled/>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL}/>
                    <meta name="description" content={DESC}/>
                    <meta name="theme-color" content={config.THEME_COLOR}/>
                </Helmet>

                <div id="preloader">
                    <img alt="Ditt gym i Umeå - USM" id="preloader-logo" src="pictures/logo.png"/>
                </div>

                <section className="hero">
                    <VideoControls src="/media/gym_video.mp4"/>
                    <div className="hero-text">
                        <HeroText/>
                        <div className="hero-buttons">
                            <Link className="btn-large" to="/member">MEDLEMSKAP</Link>
                            <Link className="btn-large" to="/facilities">ANLÄGGNINGAR</Link>
                        </div>
                    </div>
                </section>

                <Marquee/>

                <section className="animate">

                    <div className="info-grid">
                        <div className="info-box full-box">
                            <div className="info-content">
                                <img alt="Dumbbells" src="/pictures/dumbbells.png"/>
                                <div className="tint">
                                    <div className="info-text">
                                        <h2>PASS & PROGRAM</h2>
                                        <p>Se vårat utbud och boka pass eller program</p>
                                    </div>
                                    <div className="info-button-box">
                                        <Link className="btn-info" to="/">LÄS MER</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="info-content">
                                <img alt="Butik" src="/pictures/store_items.png"/>
                                <div className="tint">
                                    <div className="info-text">
                                        <h2>BUTIK & PRESENTKORT</h2>
                                        <p>Kika in våra produkter eller köp presentkort</p>
                                    </div>
                                    <div className="info-button-box">
                                        <Link className="btn-info" to="/">KÖP</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="animate" id="facilities">
                    <div className="center-div facility-box">
                        <Link className="facility-link" to="/">
                            VÅRA ANLÄGGNINGAR <span className="arrow">➤</span>
                        </Link>
                        <div className="facility-grid">
                            <div className="facility">
                                <img alt="Utopia" src="/pictures/utopia_650x650.jpg"/>
                                <div className="overlay">
                                    <h3>Utopia</h3>
                                    <p>Mån-tors: 05.00-23.00</p>
                                    <p>Fredag: 05.00-21.00</p>
                                    <p>Lördag: 09.00-18.00</p>
                                    <p>Söndag: 05.00-23.00</p>
                                </div>
                            </div>
                            <div className="facility">
                                <img alt="Östra" src="/pictures/ostra_650x650.jpg"/>
                                <div className="overlay">
                                    <h3>Östra</h3>
                                    <p>Mån-tors: 05.00-23.00</p>
                                    <p>Fredag: 05.00-21.00</p>
                                    <p>Lördag: 09.00-18.00</p>
                                    <p>Söndag: 05.00-23.00</p>
                                </div>
                            </div>
                            <div className="facility">
                                <img alt="Mariehem" src="/pictures/mariehem_650x650.jpg"/>
                                <div className="overlay">
                                    <h3>Mariehem</h3>
                                    <p>Mån-tors: 05.00-23.00</p>
                                    <p>Fredag-Lördag: 05.00-22.00</p>
                                    <p>Söndag: 05.00-23.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="news-event-container">
                    <div className="homePageNews animate">
                        <Link className="facility-link" to="/newsAndEvents">
                            Nyheter <span className="arrow">➤</span>
                        </Link>
                        <NewsList latestOnly={true}/>
                    </div>

                    <div className="homePageEvents animate">
                        <Link className="facility-link" to="/newsAndEvents">
                            Evenemang <span className="arrow">➤</span>
                        </Link>
                        <EventsList latestOnly={true}/>
                    </div>
                </div>

                <div className="about-us animate">
                    <p>Umeå Sport & Motion</p>
                    <Link className="btn-large" to="/about">Läs mer om oss</Link>
                    <p>Utopia | Östra | Mariehem</p>
                </div>
                <ScrollToTop/>
            </main>
        );
    }
}

export default Home;