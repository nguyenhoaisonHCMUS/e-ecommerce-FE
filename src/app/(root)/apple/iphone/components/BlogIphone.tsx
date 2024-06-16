import React from "react";
import Image from "next/image";
import { blogImage } from "@/assets/imgs";
function BlogIphone() {
    return (
        <div className=" mt-8">
            <p>
                Điện thoại <b>iPhone</b> là thương hiệu điện thoại thông minh
                đến từ Apple, nổi tiếng trên toàn cầu với sự đón nhận đông đảo
                của người dùng mỗi khi ra mắt sản phẩm mới. Được ra mắt lần đầu
                tiên vào năm 2007, iPhone đã trải qua hơn 15 năm phát triển và
                cải tiến, đem đến cho thị trường những sản phẩm vừa thời thượng
                vừa chất lượng. Với tuyên ngôn “Think Different”, Apple luôn
                thổi vào điện thoại của mình những “làn gió mới” về cả thiết kế
                lẫn cấu hình. iPhone với logo “quả táo khuyết” đặc trưng cũng là
                thương hiệu dẫn đầu, hứa hẹn mang đến những trải nghiệm tuyệt
                vời nhất cho mỗi người.
            </p>
            <div className=" flex-center mb-3 mt-5">
                <div className=" object-cover w-[600px] h-[450px]">
                    <Image
                        src={blogImage[1]}
                        alt="điện thoại"
                        width={600}
                        height={500}
                    />
                </div>
            </div>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Giới thiệu về thương hiệu Apple và điện thoại iPhone
                </h2>
                <p>
                    iPhone là thương hiệu điện thoại nổi tiếng trên toàn thế
                    giới, thuộc hệ sinh thái Apple và luôn là tâm điểm trong
                    cộng đồng công nghệ. Nhà sản xuất rất tinh tế khi luôn dành
                    nhiều tâm huyết cho dòng smartphone này, nhằm mang đến những
                    sản phẩm tốt nhất. Vậy liệu bạn đã biết rõ về Apple cũng như
                    lịch sử của iPhone? Hãy cùng tìm hiểu ngay sau đây.
                </p>
            </div>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Giới thiệu về Apple - “Cha đẻ” của điện thoại iPhone
                </h2>
                <p>
                    Được thành lập vào 1/4/1976 bởi người đứng đầu là Steve
                    Jobs, Apple là thương hiệu công nghệ cao cấp đến từ Hoa Kỳ.
                    Trải qua gần 50 năm phát triển, tập đoàn đang ngày càng lớn
                    mạnh và dẫn đầu thị trường trong nhiều dòng sản phẩm. Ban
                    đầu, Apple ra đời chỉ tập trung sản xuất và cung cấp duy
                    nhất máy tính cá nhân mang tên Apple I và Apple II. Đến năm
                    1984, Macintosh được ra đời, là dòng máy tính cá nhân đầu
                    tiên trên thế giới sử dụng giao diện đồ họa người dùng và
                    chuột. Khoảng thời gian sau đó, công ty liên tục gặp khó
                    khăn với những vấn đề về kinh doanh và nhân sự. Thời kỳ đỉnh
                    cao của Apple trở lại vào năm 1997 khi Steve Jobs tiếp tục
                    với thương hiệu và cho ra mắt nhiều dòng sản phẩm đột phá
                    cho đến hiện nay như iMac, điện thoại iPhone, máy tính bảng
                    iPad,….
                </p>
                <div className=" flex-center mb-3 mt-5">
                    <div className=" object-cover w-[800px] h-[450px]">
                        <Image
                            src={blogImage[2]}
                            alt="điện thoại"
                            width={800}
                            height={500}
                        />
                    </div>
                </div>
                <p>
                    Định vị là thương hiệu công nghệ cao cấp, Apple luôn tiên
                    phong trong đổi mới, sáng tạo để mang đến những sản phẩm
                    tiên tiến với thiết kế đẹp mắt và trải nghiệm người dùng
                    tuyệt vời. Người dùng sẽ phải trầm trồ với những khác biệt
                    mà thương hiệu tạo ra cho hệ sinh thái độc quyền của mình,
                    giúp các thiết bị được kết nối liền mạch và sở hữu nhiều
                    tính năng mới mẻ.
                    <br /> Đây cũng là lý do Apple trở thành một trong hai nhà
                    sản xuất smartphone hàng đầu, là công ty công nghệ lớn nhất
                    thế giới với giá trị thị trường hơn 3000 tỷ USD.
                </p>
            </div>
        </div>
    );
}

export default BlogIphone;
