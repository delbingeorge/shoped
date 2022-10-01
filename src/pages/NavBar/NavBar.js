import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faBars,
    faCartShopping,
    faHeart,
    faHeartCircleBolt,
    faHeartCirclePlus,
    faHome,
    faShop,
    faStar,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../NavBar/NavBar.css";
import shopedLogo from "../NavBar/shopedLogo.png";

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
                                <Link to="/" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon className="hamburger-link-icon" icon={faUserAlt}></FontAwesomeIcon>{" "}
                                        Delbin George
                                    </li>
                                </Link>
                                <Link to="" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon className="hamburger-link-icon" icon={faHome}></FontAwesomeIcon>Home
                                    </li>
                                </Link>
                                <Link to="" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon className="hamburger-link-icon" icon={faShop}></FontAwesomeIcon>Shop
                                    </li>
                                </Link>
                                <Link to="" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon
                                            className="hamburger-link-icon"
                                            icon={faBagShopping}
                                        ></FontAwesomeIcon>
                                        Product
                                    </li>
                                </Link>
                                <Link to="" className="hamburger-link">
                                    <li>
                                        <FontAwesomeIcon
                                            className="hamburger-link-icon"
                                            icon={faCartShopping}
                                        ></FontAwesomeIcon>
                                        Cart
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <Link to="mainApp" className="nav-item-link">
                        <img src={shopedLogo} alt="Shoped Online Shopping Logo"></img>
                    </Link>
                </div>
                <div className="header-item-two">
                    <Link to="home" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        About Us
                    </Link>
                    <Link to="shop" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faHeart} /> Wishlist
                    </Link>
                    <Link to="product" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faStar} /> Plus
                    </Link>
                    <Link to="your-cart" className="nav-item-link" spy={true} smooth={true} offset={10} duration={1950}>
                        <FontAwesomeIcon icon={faCartShopping} />
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
