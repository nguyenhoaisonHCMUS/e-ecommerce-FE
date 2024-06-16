"use client";

import { Pagination } from "antd";
import publics from "../../../../public";
import ProductCard from "../../../components/ProductCard";
import ListSlides from "@/components/listSlides";
import FilterScreen from "./components/FilterScreen";
import { screenImage } from "@/assets/imgs";
import BlogScreen from "./components/BlogScreen";

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

function ScreenPage() {
    return (
        <>
            <div className=" w-full mx-auto flex flex-col mb-8">
                <div className=" my-4 ">
                    <ListSlides lists={screenImage} width={1200} height={200} />
                </div>
                <div>
                    <div>
                        <p className=" text-xl font-bold mt-4 mb-2">
                            {" "}
                            Màn hình máy tính
                        </p>
                        <p className=" opacity-70 mb-5">
                            <b>Màn hình</b> là một bộ phận không thể thiếu khi
                            đi mua một chiếc máy tính để bàn (desktop), bên cạnh
                            những linh kiện như CPU, RAM, mainboard hay ổ cứng,
                            để có một bộ máy tính hoàn chỉnh.
                        </p>
                    </div>
                    <div className=" flex gap-4">
                        <FilterScreen />
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

                <BlogScreen />
            </div>
        </>
    );
}

export default ScreenPage;
