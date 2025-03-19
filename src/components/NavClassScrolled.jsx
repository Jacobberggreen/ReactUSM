// -------------- Nav Scroll ----------------
import {useEffect} from 'react';

const NavClassScrolled = () => {
    useEffect(() => {
        const header = document.querySelector('header');
        const navMenu = document.getElementById('nav-menu');

        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            if (window.scrollY === 0) {
                navMenu.classList.remove('active'); // Döljer ev. öppen meny
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up (tar bort lyssnaren om komponenten tas bort)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Kör bara en gång vid mount

    return null; // Eftersom detta är en logik-komponent, inte UI
};

export default NavClassScrolled;
