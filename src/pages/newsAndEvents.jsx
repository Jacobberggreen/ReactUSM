import React from "react";
import {Link} from "react-router-dom";
import config from "../config.json";
import {Helmet} from "react-helmet";

import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from "../components/AnimatedElements.jsx";
import NewsList from "../components/NewsList.jsx";
import EventsList from "../components/EventsList.jsx";

const TITLE = config.SITE_TITLE + " - AKTUELLT";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class NewsAndEvents extends React.Component {
    componentDidMount() {
        AnimatedElements();
    }

    render() {
        return (
            <main id="about">
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL}/>
                    <meta name="description" content={DESC}/>
                    <meta name="theme-color" content={config.THEME_COLOR}/>
                </Helmet>
                <section className="about">
                    <div className="page-text">
                        <div className="page-text-content">
                            <h1>AKTUELLT</h1>
                        </div>
                    </div>

                    <Link className="facility-link news-event-links" to="/newsAndEvents#events"
                          onClick={() => setTimeout(() => {
                              document.getElementById("events")?.scrollIntoView({behavior: "smooth"});
                          }, 100)}>
                        Evenemang <span className="arrow">➤</span>
                    </Link>

                    <div className="news-event-container newsAndEvents">
                        <div className="homePageNews animate" id="news">
                            <Link className="facility-link" to="/newsAndEvents">
                                Nyheter <span className="arrow"/>
                            </Link>
                            <NewsList/>
                        </div>

                        <div className="homePageEvents animate" id="events">
                            <Link className="facility-link" to="/newsAndEvents">
                                Evenemang <span className="arrow"/>
                            </Link>
                            <EventsList/>
                        </div>
                    </div>
                </section>
                <ScrollToTop/>
            </main>
        )
    }
}

export default NewsAndEvents;