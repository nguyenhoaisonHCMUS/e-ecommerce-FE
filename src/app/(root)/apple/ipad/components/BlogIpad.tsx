import React from "react";
import Image from "next/image";
import { blogImage } from "@/assets/imgs";
function BlogIpad() {
    return (
        <div className=" mt-8">
            <p>
                <b>iPad</b> là dòng máy tính bảng cao cấp được sản xuất bởi
                Apple, ra mắt lần đầu tiên vào năm 2010. Với thiết kế sang
                trọng, hiệu năng mạnh mẽ và hệ sinh thái ứng dụng phong phú,
                thiết bị đã nhanh chóng trở thành một trong những sản phẩm công
                nghệ được ưa chuộng nhất trên thị trường. Từ khi ra mắt cho đến
                nay, iPad luôn là một trong những dòng máy tính bảng bán chạy
                nhất trên thế giới. Thiết bị được biết đến với khả năng đáp ứng
                đa dạng nhu cầu của người dùng, từ học tập, công việc đến giải
                trí và đặc biệt là công cụ hữu ích cho những nhà sáng tạo nội
                dung và nghệ thuật.
            </p>
            <div className=" flex-center mb-3 mt-5">
                <div className=" object-cover w-[800px] h-[450px]">
                    <Image
                        src={blogImage[3]}
                        alt="ipad"
                        width={800}
                        height={500}
                    />
                </div>
            </div>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Giới thiệu về Apple - Thương hiệu tạo nên sản phẩm iPad
                </h2>
                <p>
                    Apple là cái tên đã không còn xa lạ với bất kỳ ai yêu thích
                    công nghệ. Hành trình khai sinh và phát triển của Apple khởi
                    đầu từ năm 1976 bởi ba nhà sáng lập là Steve Jobs, Steve
                    Wozniak và Ronald Wayne. Từ một “gara nhỏ” tại California,
                    Apple đã vươn mình trở thành một trong những tập đoàn công
                    nghệ lớn nhất thế giới với trụ sở chính đặt tại Cupertino,
                    Hoa Kỳ.
                </p>
            </div>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Apple - “Gã khổng lồ” tiên phong trong lĩnh vực công nghệ
                </h2>
                <p>
                    Apple là cái tên đã không còn xa lạ với bất kỳ ai yêu thích
                    công nghệ. Hành trình khai sinh và phát triển của Apple khởi
                    đầu từ năm 1976 bởi ba nhà sáng lập là Steve Jobs, Steve
                    Wozniak và Ronald Wayne. Từ một “gara nhỏ” tại California,
                    Apple đã vươn mình trở thành một trong những tập đoàn công
                    nghệ lớn nhất thế giới với trụ sở chính đặt tại Cupertino,
                    Hoa Kỳ.
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
                    Apple không chỉ là một cái tên, mà còn là một biểu tượng,
                    một hiện tượng văn hóa và một thế lực thống trị trong ngành
                    công nghệ toàn cầu. Nằm trong top những công ty có giá trị
                    vốn hóa lớn nhất thế giới, Apple sở hữu nguồn lực tài chính
                    dồi dào, đầu tư mạnh mẽ vào nghiên cứu phát triển, mở rộng
                    thị trường và thực hiện các thương vụ mua bán táo bạo. Nhắc
                    đến Apple, người ta nghĩ ngay đến sự sang trọng, đẳng cấp,
                    đổi mới và chất lượng vượt trội.
                </p>
            </div>
        </div>
    );
}

export default BlogIpad;
