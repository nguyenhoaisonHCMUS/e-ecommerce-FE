"use client";
import React from "react";
import MenuBar from "./components/MenuBar";
import ListSlides from "@/components/listSlides";
import { appleImage } from "@/assets/imgs";
import publics from "../../../../public";
import ProductCard from "@/components/ProductCard";
import { Button } from "antd";
import { useRouter } from "next/navigation";
const products: string[] = [
    publics.logo,
    publics.paymaster,
    publics.logo,
    publics.logo,
    publics.logo,
];

function ApplePage() {
    const router = useRouter();

    return (
        <div>
            <MenuBar />
            <div className=" my-8 rounded-xl overflow-hidden">
                <ListSlides lists={appleImage} width={1200} height={382} />
            </div>
            {/* iphone */}
            <div className=" mb-8">
                <div>
                    <div>
                        <p className=" text-xl font-bold mt-4 mb-2 text-center">
                            {" "}
                            iPhone
                        </p>
                    </div>
                    <div className=" flex flex-col gap-4">
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
                            </div>
                        </div>
                        <div className=" flex-center">
                            <Button
                                onClick={() => router.push("apple/iphone")}
                                size={"large"}
                                className=" bg-primary flex-1 text-black text-base font-semibold"
                            >
                                Xem thêm
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ipad */}
            <div className=" mb-8">
                <div>
                    <div>
                        <p className=" text-xl font-bold mt-4 mb-2 text-center">
                            {" "}
                            iPad
                        </p>
                    </div>
                    <div className=" flex flex-col gap-4">
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
                            </div>
                        </div>
                        <div className=" flex-center">
                            <Button
                                onClick={() => router.push("apple/ipad")}
                                size={"large"}
                                className=" bg-primary flex-1 text-black text-base font-semibold"
                            >
                                Xem thêm
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mb-8">
                <div>
                    <div>
                        <p className=" text-xl font-bold mt-4 mb-2 text-center">
                            {" "}
                            MacBook
                        </p>
                    </div>
                    <div className=" flex flex-col gap-4">
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
                            </div>
                        </div>
                        <div className=" flex-center">
                            <Button
                                onClick={() => router.push("apple/ipad")}
                                size={"large"}
                                className=" bg-primary flex-1 text-black text-base font-semibold"
                            >
                                Xem thêm
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplePage;
