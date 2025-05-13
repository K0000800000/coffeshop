import React, { useState, useEffect } from 'react';
import './Header.css';
import img from '../../img/pg/hreengouse.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflowY = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflowY = 'auto';
            document.body.style.height = 'auto';
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="header">
            <div className="header-inner adjust">
                <div className="header-navi-wrapper">
                    <nav className="menu-wrapper menu-prime1">
                        <ul className="menu">
                            <li className="menu-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/menu">Menu</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header-title-wrapper'>
                    <div className='header-title'>
                        <div className='logo'
                            onClick={
                                isMobileMenuOpen ?
                                    toggleMobileMenu : null}>
                            <NavLink to="/" className='logo-link'>
                                <img src={img} width={67} height={67} className='logo-title' alt="title" />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='mobile-title'>
                    <span>Coffeshop</span>
                </div>
                <button className="toggle" onClick={toggleMobileMenu}>
                    <span className="toggle-inner">
                        <span className="toggle-icon">
                            <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="26" height="7" viewBox="0 0 26 7">
                                <path fillRule="evenodd" d="M3.5,7 C1.567003,7 0,5.4329966 0,3.5 C0,1.5670034 1.567003,0 3.5,0 C5.432997,0 7,1.5670034 7,3.5 C7,5.4329966 5.432997,7 3.5,7 Z M13,7 C11.067003,7 9.5,5.4329966 9.5,3.5 C9.5,1.5670034 11.067003,0 13,0 C14.932997,0 16.5,1.5670034 16.5,3.5 C16.5,5.4329966 14.932997,7 13,7 Z M22.5,7 C20.567003,7 19,5.4329966 19,3.5 C19,1.5670034 20.567003,0 22.5,0 C24.432997,0 26,1.5670034 26,3.5 C26,5.4329966 24.432997,7 22.5,7 Z" transform="translate(0 0)"></path>
                            </svg>
                        </span>
                    </span>
                </button>
                <div className="header-navi-wrapper">
                    <nav className="menu-wrapper menu-prime2">
                        <ul className="menu">
                            <li className="menu-item">
                                <NavLink to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/join">Join Us</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-menu-list">
                        <li className="mobile-menu-item">
                            <NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink>
                        </li>
                        <li className="mobile-menu-item">
                            <NavLink to="/menu" onClick={toggleMobileMenu}>Menu</NavLink>
                        </li>
                        <li className="mobile-menu-item">
                            <NavLink to="/about" onClick={toggleMobileMenu}>About Us</NavLink>
                        </li>
                        <li className="mobile-menu-item">
                            <NavLink to="/gallery" onClick={toggleMobileMenu}>Gallery</NavLink>
                        </li>
                        <li className="mobile-menu-item">
                            <NavLink to="/join" onClick={toggleMobileMenu}>Join Us</NavLink>
                        </li>
                        <li className="mobile-menu-item">
                            <NavLink to="/contact" onClick={toggleMobileMenu}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};