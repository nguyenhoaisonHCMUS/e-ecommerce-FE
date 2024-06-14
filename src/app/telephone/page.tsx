"use client";

import { Pagination } from "antd";
import publics from "../../../public";
import ProductCard from "./components/ProductCard";
import { Fragment } from "react";

const products: string[] = [
    publics.logo,
    publics.paymaster,
    publics.logo,
    publics.logo,
    publics.logo,
    publics.logo,
    publics.logo,
    publics.logo,
];

function PhonePage() {
    return (
        <>
            <div className=" grid grid-cols-5 gap-y-6 gap-x-4">
                {products.map((product, index) => {
                    return <ProductCard src={product} key={index} />;
                })}
            </div>
            <div className=" flex-center">
                <Pagination defaultCurrent={1} total={500} />
            </div>
        </>
    );
}

export default PhonePage;
