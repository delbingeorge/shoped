import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "../../Product/Product.css";
import bootsImg from "../Sports/images/bootsImg.png";
import jerseyImg from "../Sports/images/jerseyImg.png";
import footballImg from "../Sports/images/footballImg.png";
import shoeImg from "../Sports/images/shoeImg.png";
import { Link } from "react-scroll";
function Sports() {
    return (
        <div>
            <section className="product-section" id="sports">
                <div className="product-cate-title">
                    <h1>Sports & Workouts</h1>
                    <Link to="" className="see-all-link">
                        See All
                    </Link>
                </div>
                <div className="product-div">
                    <div className="product-item">
                        <img src={bootsImg} alt="Mercurial Football Shoes"></img>
                        <h1 className="product-title">Mercurial Football Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            7995.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={jerseyImg} alt="Men's Football Club Kit"></img>
                        <h1 className="product-title">Men's Football Club Kit</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            995.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={footballImg} alt="Nike World Cup Football"></img>
                        <h1 className="product-title">Nike World Cup Football</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            795.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={shoeImg} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Nike Basketball Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            2995.00
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sports;
