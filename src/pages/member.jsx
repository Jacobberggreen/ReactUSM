import React from "react";
import {Helmet} from "react-helmet";
import config from "../config.json";
import ScrollToTop from "../components/ScrollToTop.jsx";
import {AnimatedElements} from "../components/AnimatedElements.jsx";
import FacilityMemberSelect from "../components/FacilityMemberSelect.jsx";

const TITLE = config.SITE_TITLE + " - MEDLEMSKAP";
const DESC = "Umeå Sport och Motion.";
const CANONICAL = config.SITE_DOMAIN + "/";

class Member extends React.Component {
    componentDidMount() {
        AnimatedElements();
    }

    render() {
        const membershipCards = [
            {
                facility: "utopia",
                title: "USM i Utopia förskott",
                desc: "Full tillgång till gym och pass.",
                price: "8388 SEK",
                img: "../../public/pictures/utopia_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=1&subscription=940"
            },
            {
                facility: "utopia",
                title: "USM i Utopia autogiro",
                desc: "12 månaders löpande medlemskap.",
                price: "699 SEK per månad",
                img: "../../public/pictures/utopia_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=1&subscription=939"
            },
            {
                facility: "utopia",
                title: "USM i Utopia månadskort",
                desc: "Full tillgång till gym och pass.",
                price: "999 SEK",
                img: "../../public/pictures/utopia_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=1&subscription=295"
            },
            {
                facility: "ostra",
                title: "USM på Östra förskott",
                desc: "Full tillgång till gym och pass.",
                price: "8388 SEK",
                img: "../../public/pictures/ostra_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=978&subscription=940"
            },
            {
                facility: "ostra",
                title: "USM på Östra autogiro",
                desc: "12 månaders löpande medlemskap.",
                price: "699 SEK per månad",
                img: "../../public/pictures/ostra_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=978&subscription=939"
            },
            {
                facility: "ostra",
                title: "USM på Östra månadskort",
                desc: "Full tillgång till gym och pass.",
                price: "999 SEK",
                img: "../../public/pictures/ostra_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=978&subscription=295"
            },
            {
                facility: "mariehem",
                title: "USM på Mariehem förskott",
                desc: "Full tillgång till gym och pass.",
                price: "6588 SEK",
                img: "../../public/pictures/mariehem_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=565&subscription=449"
            },
            {
                facility: "mariehem",
                title: "USM på Mariehem autogiro",
                desc: "12 månaders löpande medlemskap.",
                price: "559 SEK per månad",
                img: "../../public/pictures/mariehem_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=565&subscription=447"
            },
            {
                facility: "mariehem",
                title: "USM på Mariehem månadskort",
                desc: "Full tillgång till gym och pass.",
                price: "899 SEK",
                img: "../../public/pictures/mariehem_650x650.jpg",
                link: "https://usm.goactivebooking.com/buy-subscription?customer-type=1&facility=565&subscription=650"
            },
        ];

        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL}/>
                    <meta name="description" content={DESC}/>
                    <meta name="theme-color" content={config.THEME_COLOR}/>
                </Helmet>

                <section className="medlemskap">
                    <div className="page-text">
                        <div className="page-text-content">
                            <h1>VÅRA MEDLEMSKAP</h1>
                        </div>
                    </div>

                    <div className="membership-image">
                        <img alt="Medlemskapskort" src="../../public/pictures/medlemskort.png"/>
                    </div>

                    <FacilityMemberSelect membershipCards={membershipCards}/>
                </section>
                <ScrollToTop/>
            </main>
        );
    }
}

export default Member;
