"use client";

import { Pagination } from "antd";
import publics from "../../../../public";
import ProductCard from "../../../components/ProductCard";
import ListSlides from "@/components/listSlides";
import FilterPhone from "./components/FilterPhone";
import { imagestelephone } from "@/assets/imgs";
import BlogPhone from "./components/BlogPhone";

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
            <div className=" w-full mx-auto flex flex-col mb-8">
                <div className=" my-4 ">
                    <ListSlides
                        lists={imagestelephone}
                        width={1200}
                        height={200}
                    />
                </div>
                <div>
                    <div>
                        <p className=" text-xl font-bold mt-4 mb-2">
                            {" "}
                            Điện thoại di động (smartphone)
                        </p>
                        <p className=" opacity-70 mb-5">
                            Đi cùng với sự phát triển của khoa học công nghệ thì
                            chiếc điện thoại (hay smartphone) đang ngày càng
                            được cải tiến để phục vụ tốt hơn cho cuộc sống của
                            con người.
                        </p>
                    </div>
                    <div className=" flex gap-4">
                        <FilterPhone />
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
                <div className="">
                    <BlogPhone />
                </div>
            </div>
        </>
    );
}

export default PhonePage;
