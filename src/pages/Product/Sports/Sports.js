import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faArrowUp, faArrowDown, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import "../../Product/Product.css";
import bootsImg from "../Sports/images/bootsImg.png";
import jerseyImg from "../Sports/images/jerseyImg.png";
import footballImg from "../Sports/images/footballImg.png";
import shoeImg from "../Sports/images/shoeImg.png";

function Sports() {
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("View More");
    const [buttonIcon, setButtonIcon] = useState(faArrowDown);
    const [value, setValue] = useState([]);
    const fetchData = () => {
        axios.get("https://delbingeorge.github.io/shopedapi/sports.json").then((res) => {
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
            <section className="product-section" id="sports">
                <div className="product-cate-title">
                    <h1>Sports & Workouts</h1>
                </div>
                <div className="product-div ">
                    <div className="product-item special-offer ">
                        <img src={bootsImg} alt="Mercurial Football Shoes"></img>
                        <h1 className="product-title">Mercurial Football Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            7995.00
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
                        <img src={jerseyImg} alt="Men's Football Club Kit"></img>
                        <h1 className="product-title">Men's Football Club Kit</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            995.00
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
                        <img src={footballImg} alt="Nike World Cup Football"></img>
                        <h1 className="product-title">Nike World Cup Football</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            795.00
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
                        <img src={shoeImg} alt="Nike Basketball Shoes"></img>
                        <h1 className="product-title">Nike Basketball Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            2995.00
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

export default Sports;
