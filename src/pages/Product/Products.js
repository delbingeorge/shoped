import React from "react";
import Fashion from "./Fashion/Fashion";

import Gadgets from "./Gadgets/Gadgets";
import Sports from "./Sports/Sports";
function Products() {
    return (
        <div>
            <Gadgets />
            <Sports />
            <Fashion />
        </div>
    );
}

export default Products;
