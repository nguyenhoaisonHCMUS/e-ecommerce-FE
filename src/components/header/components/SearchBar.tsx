import { MdPhoneIphone } from "react-icons/md";
import { FcIphone } from "react-icons/fc";
import { CiLaptop } from "react-icons/ci";
import { FaTabletAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Link from "next/link";

function SearchBar() {
    return (
        <div className="   w-full max-w-[1200px] mx-auto my-5 rounded-xl bg-secondary">
            <div className=" w-full h-[68px] text-white flex px-6 z-50">
                <Link
                    href={"/telephone"}
                    className=" flex-center flex-col w-[100px] cursor-pointer"
                >
                    <MdPhoneIphone className=" w-[30px] h-[30px]" />
                    <span>Điện thoại</span>
                </Link>
                <Link
                    href={"/apple"}
                    className=" flex-center flex-col w-[100px] cursor-pointer"
                >
                    <FcIphone className=" w-[30px] h-[30px]" />
                    <span>Apple</span>
                </Link>
                <Link
                    href={"/laptop"}
                    className=" flex-center flex-col w-[100px] cursor-pointer"
                >
                    <CiLaptop className=" w-[30px] h-[30px]" />
                    <span>Laptop</span>
                </Link>
                <div className=" flex-center flex-col w-[100px] cursor-pointer">
                    <FaTabletAlt className=" w-[30px] h-[30px]" />
                    <span>Tablet</span>
                </div>
                <Link
                    href={"/screen"}
                    className=" flex-center flex-col w-[100px] cursor-pointer"
                >
                    <AiOutlineFundProjectionScreen className=" w-[30px] h-[30px]" />
                    <span>Màn hình</span>
                </Link>
            </div>
        </div>
    );
}

export default SearchBar;
