import React from "react";
import "../Cart/Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faHouseMedicalCircleExclamation, faIndianRupee } from "@fortawesome/free-solid-svg-icons";

import smartWatch from "../Product/Gadgets/images/smartWatch.png";

function Cart() {
    return (
        <div>
            <section className="cart-section" id="your-cart">
                <h1>Your Cart Items</h1>

                <div className="cart-div">
                    <div className="cart-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-cart-btn">
                                <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} /> Remove Item
                            </button>
                        </div>
                    </div>
                    <div className="cart-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-cart-btn">
                                <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} /> Remove Item
                            </button>
                        </div>
                    </div>
                    <div className="cart-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-cart-btn">
                                <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} /> Remove Item
                            </button>
                        </div>
                    </div>
                    <div className="cart-product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="remove-cart-btn">
                                <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} /> Remove Item
                            </button>
                        </div>
                    </div>
                </div>
                <div className="cart-checkout-div">
                    <h4>Sub Total: 434500</h4>
                    <button className="cart-checkout-btn">
                        <FontAwesomeIcon icon={faCheckCircle} /> Check Out
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Cart;
