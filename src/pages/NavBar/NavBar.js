import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars, faCartShopping, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

import "../NavBar/NavBar.css";
import shopedLogo from "../NavBar/shopedLogo.png";
import Cart from "../Cart/Cart";
import Fav from "../Fav/Fav";

function NavBar() {
    return (
        <div>
            <header id="header">
                <div className="header-item-one">
                    <div className="hamburge-menu">
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
                    <a
                        href="https://delbin.netlify.app"
                        className="nav-item-link"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={1950}
                    >
                        About Me
                    </a>
                    <Link to="your-fav" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faHeart} /> Wishlist
                    </Link>
                    <Link to="your-cart" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faCartShopping} /> Cart
                    </Link>
                    {/* <Link to="your-profile" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faUserAlt} />
                    </Link> */}
                </div>
            </header>
            <Routes>
                <Route path="your-cart" element={<Cart />}></Route>
                <Route path="your-fav" element={<Fav />}></Route>
            </Routes>
        </div>
    );
}

export default NavBar;
