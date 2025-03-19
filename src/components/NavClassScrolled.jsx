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
                navMenu.classList.remove('active');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null;
};

export default NavClassScrolled;
