import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars, faCartShopping, faHome, faShop, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import "../NavBar/NavBar.css";
import shopedLogo from "../NavBar/shopedLogo.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <header id="header">
                <div className="header-item-one">
                    <div className="hamburge-menu">
                        <div id="menuToggle">
                            <FontAwesomeIcon icon={faBars} />
                            <input type="checkbox" />

                            <div id="menu">
                                <Link to="home" className="hamburger-link">
                                    <FontAwesomeIcon className="hamburger-link-icon" icon={faUserAlt}></FontAwesomeIcon>{" "}
                                    Delbin George
                                </Link>
                                <Link to="shop" className="hamburger-link">
                                    <FontAwesomeIcon className="hamburger-link-icon" icon={faHome}></FontAwesomeIcon>Home
                                </Link>
                                <Link to="product" className="hamburger-link">
                                    <FontAwesomeIcon className="hamburger-link-icon" icon={faShop}></FontAwesomeIcon>Shop
                                </Link>
                                <Link to="your-cart" className="hamburger-link">
                                    <FontAwesomeIcon className="hamburger-link-icon" icon={faBagShopping}></FontAwesomeIcon>
                                    Product
                                </Link>
                                <Link to="your-profile" className="hamburger-link">
                                    <FontAwesomeIcon className="hamburger-link-icon" icon={faCartShopping}></FontAwesomeIcon>
                                    Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link to="mainApp" className="nav-item-link">
                        <img src={shopedLogo} alt="Shoped Online Shopping Logo"></img>
                    </Link>
                </div>
                <div className="header-item-two">
                    <Link to="home" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        Home
                    </Link>
                    <Link to="shop" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        Shop
                    </Link>
                    <Link to="product" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        Product
                    </Link>
                    <Link to="your-cart" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faCartShopping} /> Cart
                    </Link>
                    <Link to="your-profile" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faUserAlt} />
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
