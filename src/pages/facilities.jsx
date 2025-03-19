import React from "react";
import {Link} from "react-router-dom";
import config from "../config.json";
import {Helmet} from "react-helmet";

import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from "../components/AnimatedElements.jsx";
import GymMap from "../components/GymMap.jsx";
import GymCard from "../components/GymCard.jsx";

const TITLE = config.SITE_TITLE + " - ANLÄGGNINGAR";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

const facilitiesData = [
    {
        name: "Utopia",
        hours: "Mån-Tors: 05:00 - 23:00\nFredag: 05:00 - 21:00\nLördag: 09:00 - 18:00\nSöndag: 05:00 - 23:00",
        address: "Skolgatan 62 A, Umeå",
        phone: "090-123 456",
        openHours: {1: [5, 23], 2: [5, 23], 3: [5, 23], 4: [5, 23], 5: [5, 21], 6: [9, 18], 0: [5, 23]},
    },
    {
        name: "Mariehem",
        hours: "Mån-Tors: 05:00 - 23:00\nFre-Lör: 05:00 - 22:00\nSöndag: 05:00 - 23:00",
        address: "Mariehemsvägen 10 E, Umeå",
        phone: "090-345 678",
        openHours: {1: [5, 23], 2: [5, 23], 3: [5, 23], 4: [5, 23], 5: [5, 22], 6: [5, 22], 0: [5, 23]},
    },
    {
        name: "Östra",
        hours: "Mån-Tors: 05:00 - 23:00\nFredag: 05:00 - 21:00\nLördag: 09:00 - 18:00\nSöndag: 05:00 - 23:00",
        address: "Östermalmsgatan 63 A, Umeå",
        phone: "090-789 012",
        openHours: {1: [5, 23], 2: [5, 23], 3: [5, 23], 4: [5, 23], 5: [5, 21], 6: [9, 18], 0: [5, 23]},
    },
];

class Facilities extends React.Component {
    componentDidMount() {
        AnimatedElements();
    }

    render() {
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL}/>
                    <meta name="description" content={DESC}/>
                    <meta name="theme-color" content={config.THEME_COLOR}/>
                </Helmet>

                <section className="facilities">
                    <div className="page-text">
                        <div className="page-text-content">
                            <h1>VÅRA ANLÄGGNINGAR</h1>
                        </div>
                    </div>

                    <div className="facilities-container animate">

                        <GymMap/>

                        <div className="gym-info-container" id="container-1">
                            <div className="gym-card" id="news">
                                <div className="gym-background"></div>
                                <div className="gym-content">
                                    <h2>Nyheter</h2>
                                    <div className="newsBox">
                                        <Link className="btn-large btn-white" to="/newsAndEvents">LÄS MER</Link>
                                    </div>
                                </div>
                            </div>
                            {facilitiesData.slice(0, 1).map((gym) => (
                                <GymCard
                                    key={gym.name}
                                    name={gym.name}
                                    hours={gym.hours}
                                    address={gym.address}
                                    phone={gym.phone}
                                    openHours={gym.openHours}
                                />
                            ))}
                        </div>

                        <div className="gym-info-container" id="container-2">
                            {facilitiesData.slice(1).map((gym) => (
                                <GymCard
                                    key={gym.name}
                                    name={gym.name}
                                    hours={gym.hours}
                                    address={gym.address}
                                    phone={gym.phone}
                                    openHours={gym.openHours}
                                />
                            ))}
                        </div>

                    </div>

                    <div className="gym-status-container">
                        <div className="gym-status-info">
                            <p>
                                <span id="open" className="status-icon">✅ Öppet</span> |
                                <span id="close-soon" className="status-icon">⏳ Stänger snart</span> |
                                <span id="closed" className="status-icon">❌ Stängt</span>
                            </p>
                        </div>
                    </div>
                </section>
                <ScrollToTop/>
            </main>
        );
    }
}

export default Facilities;
