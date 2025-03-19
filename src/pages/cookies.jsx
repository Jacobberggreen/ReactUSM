import React from "react";
import {Link} from "react-router-dom";
import config from "../config.json";
import {Helmet} from "react-helmet";

import {AnimatedElements} from "../components/AnimatedElements.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const TITLE = config.SITE_TITLE + " - COOKIES";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class Cookies extends React.Component {
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
                <section className="cookies">
                    <div className="page-text">
                        <div className="page-text-content">
                            <h1>COOKIES</h1>
                        </div>
                    </div>

                    <div className="about-content animate">
                        <h2>Om cookies</h2>
                        <p>En cookie är en liten textfil som lagras på besökarens dator i syfte att förbättra
                            upplevelsen och
                            förenkla användandet av webbplatsen.<br/><br/>
                            Det finns två typer av cookies. Den ena typen sparar en fil som ligger kvar på besökarens
                            dator
                            under en
                            längre tid och används till exempel för att kunna anpassa webbplatsen utifrån besökarens
                            önskemål.
                            Den
                            andra typen kallas sessionskaka och lagras temporärt under den tid som besökaren är inne på
                            webbplatsen.
                            När webbläsaren stängs raderas sessionskakan och ingen personlig information
                            sparas.<br/><br/>
                            Om du inte accepterar användandet av cookies kan du stänga av dessa i din webbläsares
                            säkerhetsinställningar. Se webbläsarens hjälpsidor för mer information. Vissa funktioner på
                            webbplatsen
                            kan påverkas om inte cookies tillåts. </p><br/>
                        <h2>Cookies på usm.nu</h2>
                        <p>På usm.nu används cookies för statistik och för att möjliggöra inloggning och bokning. Vi
                            mellanlagrar
                            dina användaruppgifter i en krypterad cookie för att du ska slippa ange dina
                            användaruppgifter varje
                            gång du använder bokningssystemet.</p>
                    </div>
                </section>
                <ScrollToTop/>
            </main>
        )
    }
}

export default Cookies;