import React from "react";
import Beauty from "./Beauty/Beauty";
import Fashion from "./Fashion/Fashion";

import Gadgets from "./Gadgets/Gadgets";
import Sports from "./Sports/Sports";
// import Electronics from "./Electronics/Electronics";
function Products() {
    return (
        <div>
            <Gadgets />
            <Sports />
            <Fashion />
            <Beauty />
            {/* <Electronics /> */}
        </div>
    );
}

export default Products;
