import React from "react";
import { FaApple } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { LuBadgeDollarSign } from "react-icons/lu";
import { RiNumber0 } from "react-icons/ri";
import { MdOutlineCurrencyExchange } from "react-icons/md";

function FooterApple() {
    return (
        <div className=" mb-8 pt-5">
            <p className=" font-bold text-xl text-center mb-5">
                Lợi ích khi mua sản phẩm Apple tại Sphone Store
            </p>
            <div className=" rounded-xl border-2">
                <div className=" grid grid-cols-2 gap-x-4 gap-y-8 p-3">
                    <div className="item">
                        <FaApple className=" w-[60px] h-[60px]" />
                        <label className="pt-3">
                            Sphone Store là Nhà bán lẻ ủy quyền chính thức của
                            Apple tại Việt Nam
                        </label>
                    </div>

                    <div className="item">
                        <FaShippingFast className=" w-[60px] h-[60px]" />
                        <label>
                            Đặt online, free ship COD hoặc thanh toán ngay và
                            nhận hàng chỉ sau 1 - 3 ngày
                        </label>
                    </div>

                    <div className="item">
                        <div className=" w-[60px]">
                            <LuBadgeDollarSign className=" w-[60px] h-[60px]" />
                        </div>
                        <label>
                            Những sản phẩm Apple chính hãng sẽ được trao tới tay
                            khách hàng với mức giá tốt hàng đầu thị trường
                        </label>
                    </div>

                    <div className="item">
                        <RiNumber0 className=" w-[60px] h-[60px]" />
                        <label>
                            Hỗ trợ trả góp 0% qua nhiều thẻ tín dụng ngân hàng
                            và các công ty tài chính
                        </label>
                    </div>

                    <div className="item">
                        <MdOutlineCurrencyExchange className=" w-[60px] h-[60px]" />
                        <label>
                            Tham gia chương trình thu cũ giá cao, đổi mới ưu đãi
                            giảm thêm tới 2 triệu đồng
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterApple;
