import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import Fav from "../../Fav/Fav";

import "../../Product/Product.css";

function Electronics() {
    const [value, setValue] = useState([]);
    const fetchData = () => {
        axios.get("https://delbingeorge.github.io/shopedapi/product.json").then((res) => {
            setValue(res.data);
        });
    };
    return (
        <div>
            <section className="product-section" id="gadgets">
                <div className="product-cate-title">
                    <h1>Gadgets</h1>
                </div>
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

                <button className="see-all-btn" onClick={fetchData}>
                    See All
                </button>
            </section>
            <Fav />
        </div>
    );
}

export default Electronics;
