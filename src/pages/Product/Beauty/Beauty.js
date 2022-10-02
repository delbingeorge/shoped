import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faIndianRupee, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import itemone from "./images/itemone.png";
import itemtwo from "./images/itemtwo.png";
import itemthree from "./images/itemthree.png";
import itemfour from "./images/itemfour.png";
function Beauty() {
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("View More");
    const [buttonIcon, setButtonIcon] = useState(faArrowDown);
    const [value, setValue] = useState([]);
    const fetchData = () => {
        axios.get("https://delbingeorge.github.io/shopedapi/beauty.json").then((res) => {
            setValue(res.data);
        });
    };
    function handleClick() {
        if (!show) {
            setButtonText("View Less");
            setButtonIcon(faArrowUp);
        } else {
            setButtonText("View More");
            setButtonIcon(faArrowDown);
        }
    }
    return (
        <div>
            <section className="product-section" id="beauty">
                <div className="product-cate-title">
                    <h1>Beauty & Cosmetics</h1>
                </div>
                <div className="product-div">
                    <div className="product-item">
                        <img src={itemone} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Beauty Fairness Cream</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="add-cart-btn">
                                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                            </button>
                            <button className="add-fav-btn">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>
                    <div className="product-item special-offer">
                        <img src={itemtwo} alt="Beats Premium Sounds"></img>
                        <h1 className="product-title">Head & Shoulder Hair Cream</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            500.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="add-cart-btn">
                                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                            </button>
                            <button className="add-fav-btn">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={itemthree} alt="Nintendo Switch Pro"></img>
                        <h1 className="product-title">Axe Body Spray Men</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            400.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="add-cart-btn">
                                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                            </button>
                            <button className="add-fav-btn">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={itemfour} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Nivia Refreshing Wash Gel</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            4590.00
                        </h1>
                        <div className="item-action-btn">
                            <button className="add-cart-btn">
                                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                            </button>
                            <button className="add-fav-btn">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>
                </div>

                {show ? (
                    <div className="product-div">
                        {value.map((val) => {
                            return (
                                <div className="product-item">
                                    <img src={val.image} alt={val.title}></img>
                                    <h1 className="product-title">{val.title}</h1>
                                    <h1 className="product-price">
                                        <FontAwesomeIcon icon={faIndianRupee} />
                                        {val.price}
                                    </h1>
                                    <div className="item-action-btn">
                                        <button className="add-cart-btn">
                                            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                                        </button>
                                        <button className="add-fav-btn">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : null}

                <div className="btn-div">
                    <button
                        className="see-all-btn"
                        onClick={() => {
                            setShow(!show);
                            handleClick();
                            fetchData();
                        }}
                    >
                        <FontAwesomeIcon icon={buttonIcon} className="see-all-btn-icon" /> {buttonText}
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Beauty;
