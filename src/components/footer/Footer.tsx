import Image from "next/image";
import publics from "../../../public";

function Footer() {
    return (
        <div className=" w-full">
            <div className=" w-[95%] mx-auto p-2 rounded-xl bg-secondary text-white flex flex-1 gap-4">
                <div className=" ">
                    <p className=" text-xl mb-2">Hỗ trợ - Dịch vụ</p>
                    <div>
                        <p>Hướng dẫn mua hàng trả góp</p>
                        <p>Chính sách vận chuyển</p>
                        <p>Chính sách đổi mới và bảo hành</p>
                        <p>Chính sách bảo mật</p>
                        <p>Chính sách và quy trình giải quyết khiếu nại</p>
                    </div>
                </div>
                <div className="">
                    <p className=" text-xl mb-2">Thông tin liên hệ</p>
                    <div>
                        <p>
                            Số Điện Thoại:{" "}
                            <span className="">0358 444 222</span>
                        </p>
                        <p>
                            Địa chỉ: 112 An Dương Vương, Hai Bà Trưng, Quận 12,
                            TP. Hồ Chí Minh
                        </p>
                    </div>
                </div>
                <div className="">
                    <p className=" text-xl mb-2">Thanh toán miễn phí</p>
                    <div className=" grid grid-cols-2 gap-2">
                        <Image
                            src={publics.paymaster}
                            alt="pay"
                            width={70}
                            height={27}
                        />
                        <Image
                            src={publics.payvisa}
                            alt="pay"
                            width={70}
                            height={27}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
