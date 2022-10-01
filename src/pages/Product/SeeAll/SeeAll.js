import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import "../SeeAll/SeeAll.css";
function SeeAll() {
    return (
        <div>
            <div className="btn-div">
                <button className="see-all-btn">
                    <FontAwesomeIcon icon={faPlusSquare} className="see-all-btn-icon" /> See More
                </button>
            </div>
        </div>
    );
}

export default SeeAll;
