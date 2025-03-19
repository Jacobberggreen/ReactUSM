import React from "react";
import {Link} from "react-router-dom";
import config from "../config.json";
import {Helmet} from "react-helmet";

import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from "../components/AnimatedElements.jsx";
import ContactSection from "../components/ContactSection.jsx";

const TITLE = config.SITE_TITLE + " - OM OSS";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class About extends React.Component {
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
                            <h1>OM OSS</h1>
                        </div>
                    </div>

                    <div className="about-content animate">
                        <div className="info-banner">
                        </div>
                        <p className="about-text-bold">Umeå Sport & Motion erbjuder tre nybyggda fullserviceanläggningar
                            i Umeå. Vi
                            står för kvalité, hälsa och hållbarhet. </p>
                        <p>Umeå Sport & Motion är ett självklart val för många umebor när de ska välja sin träning. Vi
                            lägger
                            stor
                            vikt vid den personliga servicen och vi gör vårt yttersta för att dina besök hos oss ska
                            hålla hög
                            kvalitet.<br/><br/><br/>

                            Längst upp i Utopiagallerian hittar du USM. Vi erbjuder en anläggning på ca 1900 kvm med ett
                            stort
                            välutrustat gym, stor konditionsdel samt 3 gruppträningssalar med ett varierat och
                            innehållsrikt
                            utbud.
                            Anläggningen öppnade i mars 2015.<br/><br/><br/>

                            På Mariehem centrum hittar du USM's tredje anläggning. På USM på Mariehem erbjuder vi ett
                            fullt
                            utrustat
                            gym med konditionsdel samt två salar för gruppträning. Anläggningen håller mycket hög klass
                            i allt
                            från
                            utrustning till lokaler. Anläggningen öppnade i december 2017.<br/><br/><br/>

                            Till sist finner du vår nyaste anläggning på Umeå Östra, i det nya kontorshuset bredvid
                            Östra
                            station.
                            Här hittar du ett brett gruppträningsutbud, stort gym och en helt fantastisk atmosfär. Vår
                            vision
                            för
                            vår nya träningsanläggning vid Östra station är att skapa en plats för en smidig och hållbar
                            vardag
                            där
                            träning är en naturlig del av din dag. Anläggningen öppnade i september 2024.<br/><br/><br/>

                            Välkommen till oss!</p>
                    </div>

                    <div className="page-text animate">
                        <h1>KONTAKTA OSS</h1>
                    </div>
                    <ContactSection/>
                </section>
                <ScrollToTop/>
            </main>
        )
    }
}

export default About;