import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faArrowDown, faArrowUp, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import axios from "axios";

import "../../Product/Product.css";
import smartWatch from "../Gadgets/images/smartWatch.png";
import headPhone from "../Gadgets/images/headPhone.png";
import switchN from "../Gadgets/images/switch.png";
import controller from "../Gadgets/images/controller.png";
function Gadgets() {
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("View More");
    const [buttonIcon, setButtonIcon] = useState(faArrowDown);
    const [value, setValue] = useState([]);
    const fetchData = () => {
        axios.get("https://delbingeorge.github.io/shopedapi/gadgets.json").then((res) => {
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
                    <div className="product-item special-offer">
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

export default Gadgets;
