"use client";
import { cusList } from "@/assets/imgs";
import Image from "next/image";
import { useState } from "react";

type CustomerType = {
    src: string;
    name: string;
    content: string;
};

const customers: CustomerType[] = [
    {
        src: cusList[0],
        name: "Nguyễn Huy Hoàng",
        content:
            "Với một vận động viên thể thao, Hoàng luôn ưu tiên việc chăm sóc sức khoẻ bản thân. Lịch thi đấu dày đặc, nay Hoàng mới có dịp quay trở lại cửa hàng công nghệ yêu thích - Hoàng Hà Mobile chi nhánh quận 1, Tp.HCM để rinh về chiếc đồng hồ Garmin Fenix 7 phục vụ cho quá trình tập luyện và thi đấu thể thao.",
    },
    {
        src: cusList[0],
        name: "Nguyễn Hoàng Long",
        content:
            "Với một vận động viên thể thao, Hoàng luôn ưu tiên việc chăm sóc sức khoẻ bản thân. Lịch thi đấu dày đặc, nay Hoàng mới có dịp quay trở lại cửa hàng công nghệ yêu thích - Hoàng Hà Mobile chi nhánh quận 1, Tp.HCM để rinh về chiếc đồng hồ Garmin Fenix 7 phục vụ cho quá trình tập luyện và thi đấu thể thao.",
    },
    {
        src: cusList[0],
        name: "Ngô Thị Ái Nhi",
        content:
            "Với một vận động viên thể thao, Hoàng luôn ưu tiên việc chăm sóc sức khoẻ bản thân. Lịch thi đấu dày đặc, nay Hoàng mới có dịp quay trở lại cửa hàng công nghệ yêu thích - Hoàng Hà Mobile chi nhánh quận 1, Tp.HCM để rinh về chiếc đồng hồ Garmin Fenix 7 phục vụ cho quá trình tập luyện và thi đấu thể thao.",
    },
    {
        src: cusList[0],
        name: "Trần Anh Đông",
        content:
            "Với một vận động viên thể thao, Hoàng luôn ưu tiên việc chăm sóc sức khoẻ bản thân. Lịch thi đấu dày đặc, nay Hoàng mới có dịp quay trở lại cửa hàng công nghệ yêu thích - Hoàng Hà Mobile chi nhánh quận 1, Tp.HCM để rinh về chiếc đồng hồ Garmin Fenix 7 phục vụ cho quá trình tập luyện và thi đấu thể thao.",
    },
];

function CustomerList() {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 2;

    const handlePrev = () => {
        if (startIndex === 0) {
            return;
        }
        setStartIndex(
            (prevIndex) => (prevIndex - 1 + customers.length) % customers.length
        );
    };

    const handleNext = () => {
        if (customers.length - startIndex === 2) {
            return;
        }
        setStartIndex((prevIndex) => (prevIndex + 1) % customers.length);
    };

    return (
        <div className=" w-full mx-auto my-5 relative">
            <p className=" px-12 py-2 bg-secondary text-white font-bold uppercase mb-3 w-fit">
                Khách hàng của SPhone
            </p>
            <div className=" flex-center overflow-hidden transition-transform duration-500 bg-white p-4 rounded-xl shadow-xl">
                <div className=" w-[90%] flex-center gap-4 ">
                    {customers
                        .slice(startIndex, startIndex + itemsPerPage)
                        .map((item: CustomerType, index: number) => (
                            <div
                                key={index}
                                className="flex-1 flex-center gap-3"
                            >
                                <div className="flex-center w-[220px] h-[220px] overflow-hidden object-cover">
                                    <Image
                                        src={item.src}
                                        alt="customer"
                                        width={220}
                                        height={220}
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className=" font-semibold mb-2">
                                        {" "}
                                        {item.name}
                                    </p>
                                    <p className=" text-sm">{item.content}</p>
                                </div>
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

export default CustomerList;
