import Link from "next/link";
import { FaApple } from "react-icons/fa";

function MenuBar() {
    return (
        <div className=" w-full rounded-xl overflow-hidden mt-5 p-3 bg-secondary">
            <div className=" flex-between flex-1 ">
                <div className=" flex-center">
                    <FaApple className=" w-[40px] h-[40px]" />
                    <p className=" text-white font-semibold">
                        Authorized Reseller
                    </p>
                </div>
                <Link href={"/apple/iphone"} className=" flex-center">
                    <p className=" text-white font-semibold">iPhone</p>
                </Link>
                <Link href={"/apple/ipad"} className=" flex-center">
                    <p className=" text-white font-semibold">Ipad</p>
                </Link>
                <Link href={"/apple/macbook"} className=" flex-center">
                    <p className=" text-white font-semibold">MAC</p>
                </Link>
                <div className=" flex-center">
                    <p className=" text-white font-semibold">Apple Watch</p>
                </div>
                <div className=" flex-center">
                    <p className=" text-white font-semibold">Tai nghe Apple</p>
                </div>
                <div className=" flex-center">
                    <p className=" text-white font-semibold">Phụ kiện Apple</p>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
