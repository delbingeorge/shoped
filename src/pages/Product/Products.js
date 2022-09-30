import React from "react";

import Gadgets from "./Gadgets/Gadgets";
import Sports from "./Sports/Sports";
function Products() {
    return (
        <div>
            <Gadgets />
            <Sports />
            <Gadgets />
            <Sports />
            <Gadgets />
        </div>
    );
}

export default Products;
