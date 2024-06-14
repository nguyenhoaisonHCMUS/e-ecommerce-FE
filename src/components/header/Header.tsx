/* eslint-disable react/jsx-key */

import Image from "next/image";
import publics from "../../../public";
import SearchInput from "./components/SearchInput";
const UserMenu = dynamic(() => import("./components/UserMenu"), {
    ssr: false,
});
// import UserMenu from "./components/UserMenu";
import { MdCompare } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import SearchBar from "./components/SearchBar";
import Link from "next/link";

const locations = ["All", "Hồ Chí Minh City", "Hà Nội", "Đà Nẵng"];
const icons = [
    <MdCompare className=" w-5 h-5" />,
    <CiHeart className=" w-5 h-5" />,
    <IoCartOutline className=" w-5 h-5" />,
];

function Header() {
    const isLogged = false;

    // const handleLocationChange = (event) => {
    //     setLocation(event.target.value as string);
    // };

    return (
        <>
            <div className="min-h-[72px] border-b-[1px] flex-between pr-5 pl-5 gap-5 bg-white">
                <Link href={"/"} className=" flex-center">
                    <Image
                        src={publics.logo}
                        alt="logo"
                        width={68}
                        className="text-primary"
                        priority={true}
                    />
                    <span className=" text-2xl ">SPhone Store</span>
                </Link>
                <div className="flex-1 flex-center gap-2">
                    <SearchInput className="flex-1" />
                </div>
                <div className="flex-between gap-2">
                    {["So sánh", "Đã lưu", "Giỏ hàng"].map((text, index) => {
                        return (
                            <div
                                className="flex-center gap-1 cursor-pointer"
                                key={index}
                            >
                                {icons[index]}
                                <span>{text}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="flex-center gap-1 cursor-pointer">
                    {isLogged ? (
                        <span>User</span>
                    ) : (
                        <UserMenu username="Nguyen Son" />
                    )}
                </div>
            </div>
            <div className=" sticky top-0 z-50">
                <SearchBar />
            </div>
        </>
    );
}

export default Header;
