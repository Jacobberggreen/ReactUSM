import React from "react";
import {Link} from "react-router-dom";
import config from "../config.json";
import {Helmet} from "react-helmet";

import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from "../components/AnimatedElements.jsx";

const TITLE = config.SITE_TITLE + " -  SHOP";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class Shop extends React.Component {
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
                <section className="shop-section">
                    <div className="page-text">
                        <div className="page-text-content">
                            <h1>BUTIK OCH PRESENTKORT</h1>
                        </div>
                    </div>


                    <div className="shop-items">
                        <div className="gray-box animate">
                            <img alt="Presentkort" src="/pictures/giftcard.png"/>
                            <div className="gray-box-content">
                                <div className="gray-box-text">
                                    <h2>PRESENTKORT</h2>
                                    <p>Köp presentkort till valfritt belopp.</p>
                                </div>
                                <div className="gray-box-button">
                                    <Link className="btn-info" to="https://usm.goactivebooking.com/value-cards/34"
                                          rel="noopener noreferrer" target="_blank">KÖP</Link>
                                </div>
                            </div>
                        </div>

                        <div className="gray-box animate searchable">
                            <img alt="Foodbox" src="/pictures/foodbox.jpg"/>
                            <div className="gray-box-content">
                                <div className="gray-box-text">
                                    <h2>FOODBOX 10-KORT</h2>
                                    <p>10 stycken matlådor från våra foodboxes</p>
                                </div>
                                <div className="gray-box-button">
                                    <Link className="btn-info" to="https://usm.goactivebooking.com/value-cards/19"
                                          rel="noopener noreferrer" target="_blank">KÖP</Link>
                                </div>
                            </div>
                        </div>

                        <div className="shop-link-box animate">
                            <div className="shop-link-content">
                                <div className="shop-link-text">
                                    <h2>BUTIK</h2>
                                    <p>Denna länk tar dig till en webbshop med våra produkter</p>
                                </div>
                                <div className="gray-box-button">
                                    <Link className="btn-info special-btn1"
                                          to="https://www.tifosi.se/umeasportmotion/products"
                                          rel="noopener noreferrer" target="blank">KÖP</Link>
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

export default Shop;