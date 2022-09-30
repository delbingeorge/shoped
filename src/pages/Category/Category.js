import React from "react";
import "../Category/Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAirFreshener,
    faCar,
    faDoorOpen,
    faFan,
    faFootball,
    faGamepad,
    faHeadset,
    faKitchenSet,
    faLightbulb,
    faOilCan,
    faShirt,
    faSoccerBall,
    faSpa,
    faTable,
    faTruckPickup,
    faTv,
    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
function Category() {
    return (
        <div>
            <section className="category-section">
                <div className="category-div">
                    <Link to="footer" spy={true} smooth={true} offset={10} duration={1950} className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faGamepad} />
                        <h1 className="category-item-head">Gadgets</h1>
                    </Link>
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faSoccerBall} />
                        <h1 className="category-item-head">Sports</h1>
                    </div>
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faShirt} />
                        <h1 className="category-item-head">Fashion</h1>
                    </div>
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faLightbulb} />
                        <h1 className="category-item-head">Electronics</h1>
                    </div>
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faSpa} />
                        <h1 className="category-item-head">Beauty</h1>
                    </div>
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faDoorOpen} />
                        <h1 className="category-item-head">Furniture</h1>
                    </div>
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faFan} />
                        <h1 className="category-item-head">Appliances</h1>
                    </div>
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faCar} />
                        <h1 className="category-item-head">Travel</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Category;
