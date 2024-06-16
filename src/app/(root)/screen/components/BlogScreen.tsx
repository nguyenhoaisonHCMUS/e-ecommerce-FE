import { blogImage } from "@/assets/imgs";
import Image from "next/image";
function BlogScreen() {
    return (
        <div className=" mt-8">
            <p>
                Từ khi ra đời, <b>điện thoại</b> đã trở thành một phần không thể
                thiếu trong cuộc sống hàng ngày của chúng ta. Thiết bị này đang
                dần trở thành một công cụ đa năng với khả năng kết nối Internet,
                chụp ảnh, gửi tin nhắn và thực hiện hàng loạt các chức năng khác
                như ngân hàng di động, định vị GPS, thậm chí làm công cụ giải
                trí với các ứng dụng và trò chơi. Nhờ đó, điện thoại giúp mọi
                người kết nối với nhau mọi lúc mọi nơi và là công cụ hỗ trợ đắc
                lực trong việc học tập và nghiên cứu trên khắp thế giới.
            </p>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Điện thoại di động - “Người đồng hành” không thể thiếu trong
                    thời đại mới
                </h2>
                <p>
                    Có thể thấy, điện thoại di động thông minh đang dần trở
                    thành vật dụng không thể thiếu với mỗi người trong đời sống
                    hiện đại. Tuy nhiên, để phát triển được như hiện tại, thiết
                    bị này đã phải trải qua lịch sử phát triển lâu dài và có sự
                    tiến bộ cực kỳ vượt bậc trong những thập kỷ gần đây.
                </p>
            </div>
            <div>
                <h2 className=" font-bold text-2xl mt-5 mb-3">
                    Sự kiện tạo nên đột phá của ngành công nghiệp điện thoại
                </h2>
                <p>
                    Kể từ lần đầu tiên được ra mắt công chúng vào thế kỷ 19,
                    điện thoại đã mở ra một kỷ nguyên mới về cuộc cách mạng viễn
                    thông trong lịch sử loài người. Và một lần nữa, sự xuất hiện
                    của smartphone vào đầu thế kỷ 21 đã làm đổi mới hoàn toàn
                    ngành công nghiệp này. Apple cho ra mắt chiếc điện thoại
                    thông minh iPhone đầu tiên vào năm 2007, và cùng Google với
                    hệ điều hành Android, đã trở thành 2 ông lớn dẫn dắt cuộc
                    cách mạng này.
                </p>
                <div className=" flex-center mb-3 mt-5">
                    <div className=" object-cover w-[600px] h-[450px]">
                        <Image
                            src={blogImage[0]}
                            alt="điện thoại"
                            width={600}
                            height={500}
                        />
                    </div>
                </div>
                <p>
                    {" "}
                    Smartphone kết hợp khả năng của một máy tính cá nhân, máy
                    ảnh, thiết bị giải trí và điện thoại truyền thống vào một
                    thiết bị duy nhất, mang lại sự tiện lợi và khả năng kết nối
                    không giới hạn.
                    <br /> Qua từng giai đoạn phát triển, điện thoại di động đã
                    không ngừng được cải tiến. Hiện nay, đây là một trong những
                    phát minh quan trọng nhất, có ảnh hưởng sâu rộng đến cách
                    thức sống, làm việc và giao tiếp của con người trên toàn
                    cầu.
                </p>
            </div>
        </div>
    );
}

export default BlogScreen;
