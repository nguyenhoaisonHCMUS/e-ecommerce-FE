"use client";

import { Pagination } from "antd";
import publics from "../../../../public";
import ProductCard from "../../../components/ProductCard";
import ListSlides from "@/components/listSlides";
import FilterLap from "./components/FilterLap";
import BlogLap from "./components/BlogLap";
import { lapImage } from "@/assets/imgs";

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

function LapPage() {
    return (
        <>
            <div className=" w-full mx-auto flex flex-col mb-8">
                <div className=" my-4 ">
                    <ListSlides lists={lapImage} width={1200} height={200} />
                </div>
                <div>
                    <div>
                        <p className=" text-xl font-bold mt-4 mb-2"> Laptop</p>
                        <p className=" opacity-70 mb-5">
                            <b>Laptop</b> hay còn được biết đến với tên gọi máy
                            tính xách tay, là một kiểu dạng máy tính cá nhân
                            được tối giản tuyệt đối nhằm giúp người dùng có thể
                            dễ dàng di chuyển cũng như mang theo bên mình.
                        </p>
                    </div>
                    <div className=" flex gap-4">
                        <FilterLap />
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

                <BlogLap />
            </div>
        </>
    );
}

export default LapPage;
