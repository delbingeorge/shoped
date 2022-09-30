import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "../../Product/Product.css";
import smartWatch from "../Gadgets/images/smartWatch.png";
import { Link } from "react-scroll";
function Gadgets() {
    return (
        <div>
            <section className="product-section" id="gadgets">
                <div className="product-cate-title">
                    <h1>Gadgets</h1>
                    <Link to="" className="see-all-link">See All</Link>
                </div>
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
                        <img src={smartWatch}></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            45900.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={smartWatch}></img>
                        <h1 className="product-title">Apple Watch Series 8</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            45900.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={smartWatch}></img>
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
