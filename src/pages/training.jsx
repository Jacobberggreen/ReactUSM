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
                            <h1>TRÄNING</h1>
                        </div>
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

                        <div className="shop-link-box animate">
                            <div className="shop-link-content">
                                <div className="shop-link-text">
                                    <h2>BOKA TRÄNING</h2>
                                    <p>Denna länk tar dig till vår Goactivebooking sida</p>
                                </div>
                                <div className="gray-box-button">
                                    <Link className="btn-info special-btn1"
                                          to="https://usm.goactivebooking.com/class-web-categories/1/classes"
                                          rel="noopener noreferrer" target="blank">BOKA</Link>
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