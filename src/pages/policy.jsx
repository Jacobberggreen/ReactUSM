import React from "react";
import {Link} from "react-router-dom";
import config from "../config.json";
import {Helmet} from "react-helmet";

import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from "../components/AnimatedElements.jsx";

const TITLE = config.SITE_TITLE + " - POLICY";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class Policy extends React.Component {
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
                <section className="policy">
                    <div className="page-text">
                        <div className="page-text-content">
                            <h1>POLICYS</h1>
                        </div>
                    </div>

                    <div className="policy-content animate">
                        <div className="policy-text">
                            <h1>Integritetspolicy</h1>
                            <iframe id="policy-frame" src="../src/components/policy.txt"></iframe>
                        </div>
                    </div>
                </section>
                <ScrollToTop/>
            </main>
        )
    }
}

export default Policy;