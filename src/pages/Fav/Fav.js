import React from "react";
import "../Fav/Fav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faIndianRupee } from "@fortawesome/free-solid-svg-icons";

import smartWatch from "../Product/Gadgets/images/smartWatch.png";

function Fav() {
    return (
        <div>
            <section className="fav-section" id="your-cart">
                <h1>Your Wishlist</h1>

                <div className="fav-div">
                    <div className="fav-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-fav-btn">
                                <FontAwesomeIcon icon={faHeartBroken} /> Remove Item
                            </button>
                        </div>
                    </div>
                    <div className="fav-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-fav-btn">
                                <FontAwesomeIcon icon={faHeartBroken} /> Remove Item
                            </button>
                        </div>
                    </div>
                    <div className="fav-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-fav-btn">
                                <FontAwesomeIcon icon={faHeartBroken} /> Remove Item
                            </button>
                        </div>
                    </div>
                    <div className="fav-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-fav-btn">
                                <FontAwesomeIcon icon={faHeartBroken} /> Remove Item
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Fav;
