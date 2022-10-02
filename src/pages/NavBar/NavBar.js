import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars, faCartShopping, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

import "../NavBar/NavBar.css";
import shopedLogo from "../NavBar/shopedLogo.png";

function NavBar() {
    return (
        <div>
            <header id="header">
                <div className="header-item-one">
                    <div className="hamburger-menu">
                        <div id="menuToggle">
                            <FontAwesomeIcon icon={faBars} />
                            <input type="checkbox" />

                            <ul id="menu">
                                {/* <Link to="/" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon className="hamburger-link-icon" icon={faUserAlt}></FontAwesomeIcon>{" "}
                                        Delbin George
                                    </li>
                                </Link> */}
                                <Link to="" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon className="hamburger-link-icon" icon={faHome}></FontAwesomeIcon>Home
                                    </li>
                                </Link>
                                <Link to="products" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon
                                            className="hamburger-link-icon"
                                            icon={faBagShopping}
                                        ></FontAwesomeIcon>
                                        Product
                                    </li>
                                </Link>
                                <Link to="your-fav" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon className="hamburger-link-icon" icon={faHeart}></FontAwesomeIcon>
                                        Wishlist
                                    </li>
                                </Link>
                                <Link to="your-cart" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon
                                            className="hamburger-link-icon"
                                            icon={faBagShopping}
                                        ></FontAwesomeIcon>
                                        Cart
                                    </li>
                                </Link>

                                <a href="https://delbin.netlify.app" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon className="hamburger-link-icon"></FontAwesomeIcon>
                                        About Me
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <Link to="" className="nav-item-link">
                        <img src={shopedLogo} alt="Shoped Online Shopping Logo"></img>
                    </Link>
                </div>
                <div className="header-item-two">
                    <Link to="" className="nav-item-link" spy="true" smooth="true" offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link to="products" className="nav-item-link" spy="true" smooth="true" offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faBagShopping} /> Product
                    </Link>
                    <Link to="your-fav" className="nav-item-link" spy="true" smooth="true" offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faHeart} /> Wishlist
                    </Link>
                    <Link to="your-cart" className="nav-item-link" spy="true" smooth="true" offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faCartShopping} /> Cart
                    </Link>
                    <a href="https://delbin.netlify.app" className="nav-item-link">
                        About Me
                    </a>
                    {/* <Link to="your-profile" className="nav-item-link" spy="true" smooth="true" offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faUserAlt} />
                    </Link> */}
                </div>
            </header>
        </div>
    );
}

export default NavBar;
