import React from "react";
import "../Category/Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
function Category() {
    return (
        <div>
            <section className="category-section">
                <div className="category-div">
                    <div className="category-items">
                        <FontAwesomeIcon className="category-item-icon" icon={faShirt} />
                        <h1 className="category-item-head">Fashion & Shopping</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Category;
