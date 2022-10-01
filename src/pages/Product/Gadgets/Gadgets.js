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
            <section className="product-section" id="gadgets">
                <div className="product-cate-title">
                    <h1>Gadgets</h1>
                </div>
                <div className="product-div">
                    <div className="product-item">
                        <img src={smartWatch} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            49500.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={headPhone} alt="Beats Premium Sounds"></img>
                        <h1 className="product-title">Beats Premium Sounds</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            25900.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={switchN} alt="Nintendo Switch Pro"></img>
                        <h1 className="product-title">Nintendo Switch Pro Series</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            14500.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={controller} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Controller for Xbox Series</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            4590.00
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gadgets;
