import React from "react";
import FilterIphone from "./components/FilterIphone";
import publics from "../../../../../public";
import ProductCard from "@/components/ProductCard";
import { Pagination } from "antd";
import BlogIphone from "./components/BlogIphone";

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

function IphonePage() {
    console.log("re-render");
    return (
        <div>
            <div className=" w-full mx-auto flex flex-col mb-8">
                <div>
                    <div>
                        <p className=" text-xl font-bold mt-4 mb-2">
                            {" "}
                            Điện thoại Iphone chính hãng VN/A
                        </p>
                        <p className=" opacity-70 mb-5">
                            Sản phẩm điện thoại của Apple luôn là thương hiệu
                            smartphone được yêu thích ở rất nhiều quốc gia trên
                            toàn thế giới, trong đó không thể thiếu Việt Nam.
                        </p>
                    </div>
                    <div className=" flex gap-4">
                        <FilterIphone />
                        <div className=" flex-1 ">
                            <div className=" flex-1 p-4 shadow-xl rounded-md bg-white w-full my-auto">
                                <div className=" grid grid-cols-5 gap-y-6 gap-x-4">
                                    {products.map((product, index) => {
                                        return (
                                            <ProductCard
                                                src={product}
                                                key={index}
                                            />
                                        );
                                    })}
                                </div>
                                <div className=" flex-center mt-3">
                                    <Pagination
                                        defaultCurrent={1}
                                        total={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BlogIphone />
            </div>
        </div>
    );
}

export default IphonePage;
