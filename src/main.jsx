import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registered: ', registration);
        }).catch(registrationError => {
            console.log('ServiceWorker registration failed: ', registrationError);
        });
    });
}
