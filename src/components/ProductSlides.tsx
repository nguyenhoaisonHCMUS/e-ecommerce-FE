"use client";
import { cusList } from "@/assets/imgs";
import { productType } from "@/types";
import Image from "next/image";
import { useState } from "react";
import ProductCard from "./ProductCard";

type ProductSlidesType = {
    products: productType[];
};
function ProductSlides({ products }: ProductSlidesType) {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 5;

    const handlePrev = () => {
        if (startIndex === 0) {
            return;
        }
        setStartIndex(
            (prevIndex) => (prevIndex - 1 + products.length) % products.length
        );
    };

    const handleNext = () => {
        if (products.length - startIndex === 5) {
            return;
        }
        setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    return (
        <div className=" w-full mx-auto my-5 relative">
            <div className=" flex-center overflow-hidden transition-transform duration-500 bg-white p-4 rounded-xl shadow-xl">
                <div className=" w-full flex-center gap-4 ">
                    {products
                        .slice(startIndex, startIndex + itemsPerPage)
                        .map((item: productType, index: number) => (
                            <div
                                key={index}
                                className="flex-1 flex-center gap-3"
                            >
                                <ProductCard
                                    src={item.src}
                                    width={200}
                                    height={345}
                                />
                            </div>
                        ))}
                </div>
            </div>
            <div className=" absolute top-1/2 flex justify-between w-full px-4">
                <div className=" w-[40px] h-[40px] rounded-full bg-slate-200 flex-center hover:bg-slate-400">
                    <button
                        className="text-gray-400 hover:text-gray-700 text-2xl"
                        onClick={handlePrev}
                    >
                        &lt;
                    </button>
                </div>
                <div className=" w-[40px] h-[40px] rounded-full bg-slate-200 flex-center hover:bg-slate-400">
                    <button
                        className="text-gray-400 hover:text-gray-700 text-2xl"
                        onClick={handleNext}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductSlides;
