import React from 'react';
import logo from './Logo.svg';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-brand">
                            WEBDEVELOPER
                        </div>

                        <div className="header-logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <nav className="header-nav">
                            <a href="index.html" className="header-nav-link active">Home</a>
                            <a href="#" className="header-nav-link">About me</a>
                            <a href="#" className="header-nav-link">Contacts</a>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;