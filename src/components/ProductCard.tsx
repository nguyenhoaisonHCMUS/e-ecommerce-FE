import { formatCurrencyVND } from "@/libs";
import { Card } from "antd";
import Image from "next/image";

type ProductCardType = {
    src: string;
    width: number;
    height?: number;
};
function ProductCard({ src, width, height = 300 }: ProductCardType) {
    return (
        <div className="">
            <Card
                className=" h-full shadow-orange-300 border-2 border-collapse"
                hoverable
                style={{ width: `${width}px`, height: `${height}px` }}
                cover={
                    <div className="w-[95%] overflow-hidden object-cover">
                        <Image
                            alt="product"
                            src={src}
                            width={160}
                            height={200}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                        />
                    </div>
                }
            >
                <p className=" font-bold max-h-[46px] overflow-hidden text-ellipsis">
                    iPad Pro M4 13&quot; Wifi (256GB) - Chính hãng Apple VN
                </p>
                <p className="">{formatCurrencyVND(12799000)}</p>
            </Card>
        </div>
    );
}

export default ProductCard;
