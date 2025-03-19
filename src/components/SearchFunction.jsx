import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchFunction = ({isMobile}) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const searchPaddingRef = useRef(null);

    const inputRef = useRef(null);
    const getBorderRadius = () => {
        if (searchText.trim() === '') {
            return '20px';
        } else {
            return '20px 20px 0 0';
        }
    };

    const pages = [
        {path: '/facilities', name: 'Anläggningar', content: 'Här hittar du våra gym, öppettider, träning'},
        {path: '/shop', name: 'Butik', content: 'Butik för träningskläder, protein, gymutrustning'},
        {path: '/cookies', name: 'Cookies', content: 'Cookies policy och hur vi hanterar data'},
        {path: '/', name: 'Hem', content: 'Välkommen till USM, Umeås bästa gym, träning, pass'},
        {path: '/member', name: 'Medlemskap', content: 'Bli medlem, priser, medlemskap för gym och träning'},
        {path: '/about', name: 'Om oss', content: 'Om USM, vår historia, gym och personal'},
        {path: '/policy', name: 'Policy', content: 'Integritetspolicy, GDPR, regler'},
        {path: '/training', name: 'Träning', content: 'Boka pass, gruppträning, PT, gym'}
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
                setSearchText('');
                setResults([]);

                if (searchPaddingRef.current) {
                    searchPaddingRef.current.classList.remove('active', 'active2');
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (searchText.trim() === '') {
            setResults([]);
            return;
        }

        const filteredResults = pages.filter((page) =>
            (page.name + ' ' + page.content).toLowerCase().includes(searchText.toLowerCase())
        );
        setResults(filteredResults);
    }, [searchText]);

    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [searchOpen]);

    useEffect(() => {
        if (searchPaddingRef.current) {
            if (searchText.trim() !== '') {
                searchPaddingRef.current.classList.add('active2');
            } else {
                searchPaddingRef.current.classList.remove('active2');
            }
        }
    }, [searchText]);


    const handleResultClick = (path) => {
        setSearchOpen(false);
        setSearchText('');
        setResults([]);
        navigate(path);
    };

    return (
        <div ref={searchRef}>
            <div ref={searchPaddingRef} className="search-padding">
                <a
                    href="#"
                    id="search-icon"
                    onClick={(e) => {
                        e.preventDefault();
                        setSearchOpen(!searchOpen);

                        if (searchPaddingRef.current) {
                            if (!searchOpen) {
                                searchPaddingRef.current.classList.add('active');
                            } else {
                                searchPaddingRef.current.classList.remove('active');
                            }
                        }
                    }}
                >
                    Sök
                </a>
            </div>

            <input
                ref={inputRef}
                id="search-box"
                type="text"
                placeholder="Sök här..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoFocus
                style={{
                    display: searchOpen ? 'flex' : 'none',
                    borderRadius: getBorderRadius()
                }}
            />

            {searchOpen && searchText && (
                <div id="search-results" className="results-grid">
                    {results.length > 0 ? (
                        results.map((result, idx) => (
                            <div
                                key={idx}
                                className="result-item"
                                onClick={() => handleResultClick(result.path)}
                            >
                                {result.name}
                            </div>
                        ))
                    ) : (
                        <p>Inga resultat hittades.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchFunction;

