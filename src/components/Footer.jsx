import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-links">
                    <div className="logo">
                        <Link to="/">
                            <img alt="USM Logo" src="../../public/pictures/logo.png"/>
                        </Link>
                    </div>
                    <div className="footer-column">
                        <h3>TRÄNING</h3>
                        <ul>
                            <li><Link to="/facilities#utopia">USM i Utopia</Link></li>
                            <li><Link to="/facilities#ostra">USM på Östra</Link></li>
                            <li><Link to="/facilities#mariehem">USM på Mariehem</Link></li>
                            <li><Link to="/training">Boka Träning</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>OM USM</h3>
                        <ul>
                            <li><Link to="/about">Om USM</Link></li>
                            <li><Link to="/about#contact">Kontakt</Link></li>
                            <li><Link to="/member">Bli Medlem</Link></li>
                            <li><Link to="/cookies">Om Cookies</Link></li>
                            <li><Link to="/policy">Integritetspolicy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>FÖLJ OSS</h3>
                        <ul>
                            <li><Link to="https://www.facebook.com/umeasportomotion" rel="noopener noreferrer"
                                      target="_blank">Följ
                                oss på Facebook</Link></li>
                            <li><Link to="https://www.instagram.com/umeasportomotion/" rel="noopener noreferrer"
                                      target="_blank">Följ
                                oss på Instagram</Link></li>
                            <h3>Aktuellt</h3>
                            <li><Link to="/newsAndEvents">Nyheter & Evenemang</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;