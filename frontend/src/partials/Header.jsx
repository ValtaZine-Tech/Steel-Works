import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header>
                <div className="header-area ">
                    <div className="address_bar d-none d-lg-block">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="/img/logo.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="address_menu d-flex justify-content-end">
                                        <div className="single_address  d-flex">
                                            <div className="icon">
                                                <img src="/img/icon/header-address.svg" alt="" />
                                            </div>
                                            <div className="address_info">
                                                <h3>Address</h3>
                                                <p>20/D, Kings road, Green lane</p>
                                            </div>
                                        </div>
                                        <div className="single_address d-flex">
                                            <div className="icon">
                                                <img src="/img/icon/headset.svg" alt="" />
                                            </div>
                                            <div className="address_info">
                                                <h3>Call Us</h3>
                                                <p>+10 673 567 367</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-header" className="main-header-area">
                        <div className="container">
                            <div className="white_bg_bar">
                                <div className="row align-items-center">
                                    <div className="col-12 d-lg-none">
                                        <div className="logo ">
                                            <a href="#">
                                                <img src="/src/assets/img/logo.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">

                                                    <li>
                                                        <Link
                                                            to="/"
                                                            className={location.pathname === '/' ? 'active' : ''}
                                                        >
                                                            home
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/about"
                                                            className={location.pathname === '/about' ? 'active' : ''}
                                                        >
                                                            About
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/services"
                                                            className={location.pathname === '/services' ? 'active' : ''}
                                                        >
                                                            services
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/contact"
                                                            className={location.pathname === '/contact' ? 'active' : ''}
                                                        >
                                                            contact
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                                        <div className="Appointment d-flex justify-content-end">
                                            <div className="col-xl-16">
                                                <div className="header_right d-flex justify-content-end">
                                                    <a href="#" className="boxed-btn3">Get a Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 d-lg-none">
                                        <div className="mobile_menu">
                                            <div className="col-12 row mobile_menu_container">
                                                <div className="logo">
                                                    <Link to="/">
                                                        <img src="/img/logo.png" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="mobile_menu_toggle">
                                                    <button
                                                        className="mobile_menu_btn"
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        <i className="bi bi-list"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className={`mobile_menu ${isMobileMenuOpen ? 'open' : 'closed'
                                                    }`}
                                            >
                                                <nav>
                                                    <ul id="navigation">
                                                        <li>
                                                            <Link
                                                                to="/"
                                                                className={location.pathname === '/' ? 'active' : ''}
                                                                onClick={toggleMobileMenu}
                                                            >
                                                                Home
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/about"
                                                                className={location.pathname === '/about' ? 'active' : ''}
                                                                onClick={toggleMobileMenu}
                                                            >
                                                                About
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/services"
                                                                className={location.pathname === '/services' ? 'active' : ''}
                                                                onClick={toggleMobileMenu}
                                                            >
                                                                Services
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/contact"
                                                                className={location.pathname === '/contact' ? 'active' : ''}
                                                                onClick={toggleMobileMenu}
                                                            >
                                                                Contact
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}

export default Header