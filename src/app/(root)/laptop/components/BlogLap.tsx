import { blogImage } from "@/assets/imgs";
import Image from "next/image";
function BlogLap() {
    return (
        <div className=" mt-8">
            <p>
                Laptop (hay máy tính xách tay) là một thiết bị điện tử vô cùng
                linh hoạt và thiết yếu trong cuộc sống hiện đại. Đây là thiết bị
                giúp người dùng thực hiện mọi công việc, từ xử lý văn bản, duyệt
                web, chơi game, đến thiết kế đồ họa và lập trình, mọi lúc mọi
                nơi. Đặc biệt, với kích thước gọn nhẹ, laptop là lựa chọn lý
                tưởng cho những ai cần một thiết bị đa năng có thể mang theo bên
                mình. Thiết bị này có thể phục vụ nhu cầu đa dạng của mọi đối
                tượng người dùng, từ học sinh, sinh viên đến nhân viên văn
                phòng, doanh nhân và game thủ.
            </p>
            <div className=" flex-center mb-3 mt-5">
                <div className=" object-cover w-[800px] h-[450px]">
                    <Image
                        src={blogImage[4]}
                        alt="điện thoại"
                        width={800}
                        height={500}
                    />
                </div>
            </div>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Laptop - Thiết bị thiết yếu cho mọi nhu cầu giải trí, văn
                    phòng
                </h2>
                <p>
                    CCó thể nói, máy tính xách tay là một trong những thiết bị
                    quan trọng nhất của con người trong xã hội hiện đại. Mặc dù
                    có thiết kế và thân hình nhỏ gọn hơn máy tính để bàn nhưng
                    thiết bị này vẫn có thể đáp ứng hầu hết nhu cầu của người
                    dùng.
                </p>
            </div>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Laptop là gì?{" "}
                </h2>
                <p>
                    Laptop (máy tính xách tay) là một thiết bị điện tử đa năng,
                    kết hợp tất cả các chức năng của máy tính để bàn trong một
                    thiết bị nhỏ gọn có thể dễ dàng mang theo mọi nơi. Cấu trúc
                    máy tính sẽ có một màn hình, bàn phím, touchpad (hoặc chuột)
                    và các thành phần phần cứng như bộ vi xử lý, ổ cứng, RAM và
                    các kết nối không dây.
                </p>
                <div className=" flex-center mb-3 mt-5">
                    <div className=" object-cover w-[800px] h-[450px]">
                        <Image
                            src={blogImage[5]}
                            alt="laptop"
                            width={800}
                            height={500}
                        />
                    </div>
                </div>
                <p>
                    Thiết bị này được sử dụng cho một loạt các mục đích từ công
                    việc, học tập, giải trí đến truy cập Internet. Đặc biệt, máy
                    có thể chạy đa dạng các hệ điều hành, từ Windows, macOS đến
                    Linux, tùy vào nhu cầu sử dụng của người dùng.
                </p>
            </div>
        </div>
    );
}

export default BlogLap;
