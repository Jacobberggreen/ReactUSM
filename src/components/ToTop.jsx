import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ToTop = () => {
    const {pathname} = useLocation(); // Fångar aktuell path

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolla till toppen varje gång path ändras
    }, [pathname]); // Körs varje gång man navigerar

    return null; // Komponent returnerar inget visuellt
};

export default ToTop;
