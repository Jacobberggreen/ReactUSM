import {NavLink, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import LoginPopup from './LoginPopup';
import SearchFunction from "./SearchFunction";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/'; // Kolla om vi är på startsidan

    const [showLogin, setShowLogin] = useState(false); // State för login-popup
    const [menuOpen, setMenuOpen] = useState(false);  // State för hamburgermeny

    // Hantera window resize för att stänga hamburgermeny om man växlar till desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 980) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Objekt för att hålla alla länkar och labels
    const navLinks = [
        {path: "/shop", label: "Shop", className: "yes search-padding"},
        {path: "/training", label: "Boka Träning", className: "yes"},
        {path: "/facilities", label: "Anläggningar", className: "yes"},
        {path: "/member", label: "BLI MEDLEM", className: "no", btn: true},
    ];

    return (
        <header className={`header ${isHome ? 'home' : ''}`}>
            <LoginPopup show={showLogin} onClose={() => setShowLogin(false)}/>

            <nav className="nav-container">
                <div className="logo">
                    <NavLink to="/">
                        <img alt="Logo" id="logo-img" src="/pictures/logo.png"/>
                    </NavLink>
                </div>

                <ul id="nav-menu" className={menuOpen ? 'active' : ''}>

                    <li className="list-space yes search-margin">
                        <SearchFunction isMobile={window.innerWidth <= 980}/>
                    </li>

                    {navLinks.map(({path, label, className, btn}, index) => (
                        <li key={index} className={`list-space ${className}`}>
                            <NavLink
                                to={path}
                                className={({isActive}) =>
                                    `${isActive ? 'active' : ''} ${btn ? 'btn-info btn-nav' : ''}`.trim()
                                }
                                onClick={() => setMenuOpen(false)} // Stänger meny när man klickar
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}

                    <li className="list-space yes">
                        <a
                            href="#"
                            className="login-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowLogin(true);
                                setMenuOpen(false);
                            }}
                        >
                            Logga In
                        </a>
                    </li>
                </ul>


                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    id="hamburger"
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </nav>
        </header>
    );
};

export default Header;
