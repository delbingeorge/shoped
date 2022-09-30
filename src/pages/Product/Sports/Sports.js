import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "../../Product/Product.css";
import bootsImg from "../Sports/images/bootsImg.png";
import { Link } from "react-scroll";
function Sports() {
    return (
        <div>
            <section className="product-section" id="sports">
                <div className="product-cate-title">
                    <h1>Sports & Workouts</h1>
                    <Link to="" className="see-all-link">
                        See All
                    </Link>
                </div>
                <div className="product-div">
                    <div className="product-item">
                        <img src={bootsImg}></img>
                        <h1 className="product-title">Mercurial Football Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            7995.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={bootsImg}></img>
                        <h1 className="product-title">Mercurial Football Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            7995.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={bootsImg}></img>
                        <h1 className="product-title">Mercurial Football Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            7995.00
                        </h1>
                    </div>
                    <div className="product-item">
                        <img src={bootsImg}></img>
                        <h1 className="product-title">Mercurial Football Shoes</h1>
                        <h1 className="product-price">
                            <FontAwesomeIcon icon={faIndianRupee} />
                            7995.00
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sports;
