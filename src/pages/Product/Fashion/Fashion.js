import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faArrowDown, faArrowUp, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import cosmicMerch from "./images/cosmicMerch.jpg";
import tshirtMerch from "./images/tshirtMerch.png";
import hoodyImg from "./images/hoodyImg.png";
import redHoody from "./images/redHoody.png";
function Fashion() {
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("View More");
    const [buttonIcon, setButtonIcon] = useState(faArrowDown);
    const [value, setValue] = useState([]);
    const fetchData = () => {
        axios.get("https://delbingeorge.github.io/shopedapi/fashion.json").then((res) => {
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
            <section className="product-section" id="fashion">
                <div className="product-cate-title">
                    <h1>Fashion & Trends</h1>
                </div>
                <div className="product-div">
                    <div className="product-item ">
                        <img src={cosmicMerch} alt="Premium Merch by Cosmic"></img>
                        <h1 className="product-title">Premium Merch by Cosmic</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            7995.00
                        </h1>
                    </div>
                    <div className="product-item special-offer ">
                        <img src={tshirtMerch} alt="Nike Casual Wear"></img>
                        <h1 className="product-title">Nike Casual Wear</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            995.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={hoodyImg} alt="Night Black Hoody"></img>
                        <h1 className="product-title">Night Black Hoody</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            795.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={redHoody} alt="Red Hoody Outfit"></img>
                        <h1 className="product-title">Red Hoody Outfit</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            2995.00
                        </h1>
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

export default Fashion;
