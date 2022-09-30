import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "../../Product/Product.css";
import smartWatch from "../Gadgets/images/smartWatch.png";
import headPhone from "../Gadgets/images/headPhone.png";
import switchN from "../Gadgets/images/switch.png";
import controller from "../Gadgets/images/controller.png";
function Gadgets() {
    return (
        <div>
            <section className="product-section" id="gadgetsseeall">
                <div className="product-div">
                    <div className="product-item">
                        <img src={smartWatch}></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            45900.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={headPhone}></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            45900.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={switchN}></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            45900.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={controller}></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            45900.00
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gadgets;
