import React from "react";
import {Link} from "react-router-dom";
import config from "../config.json";
import {Helmet} from "react-helmet";

import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from "../components/AnimatedElements.jsx";

const TITLE = config.SITE_TITLE + " - TRÄNING";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class Training extends React.Component {
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
                <section id="training">
                    <div className="page-text">
                        <div className="page-text-content">
                            <h1>TRÄNINGSPASS</h1>
                        </div>
                    </div>

                    <div className="filter-menu animate">
                        <select className="btn-info selectInfo" id="facility-select">
                            <option value="all">Välj en anläggning</option>
                            <option value="utopia">USM - Utopia</option>
                            <option value="ostra">USM - Östra</option>
                            <option value="mariehem">USM - Mariehem</option>
                            <option value="navet">USM - Navet</option>
                            <option value="all">Alla Anläggningar</option>
                        </select>
                        <select className="btn-info selectInfo" id="pass-select">
                            <option selected value="all">Välj typ av pass</option>
                        </select>
                        <select className="btn-info selectInfo" id="instructor-select">
                            <option disabled selected>Välj instruktör</option>
                            <option value="instruct_1">Instruktör 1</option>
                            <option value="instruct_2">Instruktör 2</option>
                            <option value="instruct_3">Instruktör 3</option>
                            <option value="instruct_4">Instruktör 4</option>
                            <option value="instruct_5">Instruktör 5</option>
                        </select>
                        <input className="btn-info selectInfo" id="date-picker" type="date"/>
                    </div>

                    <div className="date-scroll-container animate">
                        <button className="scroll-btn left" onClick="scrollDates(-1)">&#9664;</button>
                        <div className="date-list" id="date-list"></div>
                        <button className="scroll-btn right" onClick="scrollDates(1)">&#9654;</button>
                    </div>

                    <div className="schedule-wrapper animate">
                        <div className="schedule">
                            <div className="time-slot">09-10</div>
                            <div className="time-slot">10-11</div>
                            <div className="time-slot">11-12</div>
                            <div className="time-slot">12-13</div>
                            <div className="time-slot">13-14</div>
                            <div className="time-slot">14-15</div>
                            <div className="time-slot">15-16</div>
                        </div>


                        <div className="schedule facility-schedule" id="schedule-utopia">
                            <div className="time-slot-item">Yoga</div>
                            <div className="time-slot-item">Spinning</div>
                            <div className="time-slot-item"></div>
                            <div className="time-slot-item">Bodypump</div>
                            <div className="time-slot-item">Spinning</div>
                            <div className="time-slot-item"></div>
                            <div className="time-slot-item">Crossfit</div>
                        </div>

                        <div className="schedule facility-schedule" id="schedule-ostra">
                            <div className="time-slot-item">Pilates</div>
                            <div className="time-slot-item">HIIT</div>
                            <div className="time-slot-item">Zumba</div>
                            <div className="time-slot-item">Boxning</div>
                            <div className="time-slot-item"></div>
                            <div className="time-slot-item">Cirkelträning</div>
                            <div className="time-slot-item"></div>
                        </div>

                        <div className="schedule facility-schedule" id="schedule-mariehem">
                            <div className="time-slot-item"></div>
                            <div className="time-slot-item">Yoga</div>
                            <div className="time-slot-item">Pilates</div>
                            <div className="time-slot-item">Crossfit</div>
                            <div className="time-slot-item">HIIT</div>
                            <div className="time-slot-item"></div>
                            <div className="time-slot-item">Bodypump</div>
                        </div>

                        <div className="schedule facility-schedule" id="schedule-navet">
                            <div className="time-slot-item">AquaFit</div>
                            <div className="time-slot-item">Simträning</div>
                            <div className="time-slot-item"></div>
                            <div className="time-slot-item"></div>
                            <div className="time-slot-item">Zumba</div>
                            <div className="time-slot-item">Yoga</div>
                            <div className="time-slot-item">Spinning</div>
                        </div>
                    </div>


                    <div className="page-text animate">
                        <p>TRÄNINGSPROGRAM</p>
                    </div>

                    <div className="info-items animate" id="PT">
                        <div className="gray-box">
                            <img alt="Grupp Träning" src="/pictures/group_training.png"/>
                            <div className="gray-box-content">
                                <div className="gray-box-text">
                                    <h2>USM START</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <div className="gray-box-button">
                                    <Link className="btn-info"
                                          to="https://usm.goactivebooking.com/buy-subscription?web-category=9"
                                          target="_blank">BOKA</Link>
                                </div>
                            </div>
                        </div>

                        <div className="gray-box">
                            <img alt="PT Träning" src="/pictures/pt_training.png"/>
                            <div className="gray-box-content">
                                <div className="gray-box-text">
                                    <h2>BOKA PT</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <div className="gray-box-button">
                                    <Link className="btn-info"
                                          to="https://usm.goactivebooking.com/event-categories/8/events"
                                          target="_blank">BOKA</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <ScrollToTop/>

            </main>
        )
    }
}

export default Training;