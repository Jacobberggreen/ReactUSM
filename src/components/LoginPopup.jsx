// ---------------- Login menu ----------------
import React from 'react';

const LoginPopup = ({show, onClose}) => {
    if (!show) return null; // Om inte show, rendera inget

    return (
        <div
            className="login-dropdown"
            id="login-dropdown"
            onClick={(e) => e.target.id === "login-dropdown" && onClose()}
            style={{display: 'flex'}}
        >
            <div className="login-box">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Logga In</h2>
                <form>
                    <label htmlFor="email">E-post</label>
                    <input id="email" placeholder="Ange din e-post" required type="email"/>

                    <label htmlFor="password">Lösenord</label>
                    <input id="password" placeholder="Ange ditt lösenord" required type="password"/>

                    <button className="btn-login" type="submit">Logga In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;

