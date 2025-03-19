import {useEffect, useState} from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    console.log('Scroll button visible:', isVisible);

    return (
        <div
            className={`btn-info scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}>TOP</div>
    );
};

export default ScrollToTop;

