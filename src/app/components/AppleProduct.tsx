import React from "react";
import publics from "../../../public";
import ProductList from "./ProductList";

type listType = {
    id: string;
    src: string;
};
const products: listType[] = [
    { id: "1", src: publics.logo },
    { id: "2", src: publics.logo },
    { id: "3", src: publics.logo },
    { id: "4", src: publics.logo },
    { id: "5", src: publics.logo },
    { id: "6", src: publics.logo },
    { id: "7", src: publics.logo },
    { id: "8", src: publics.logo },
    { id: "9", src: publics.logo },
    { id: "10", src: publics.logo },
];
function AppleProduct() {
    return (
        <div>
            <ProductList
                title="apple authorized reseller"
                products={products}
            />
        </div>
    );
}

export default AppleProduct;
