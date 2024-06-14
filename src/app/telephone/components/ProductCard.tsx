import { formatCurrencyVND } from "@/app/libs";
import { Card } from "antd";
import Image from "next/image";

type ProductCardType = {
    src: string;
};
function ProductCard({ src }: ProductCardType) {
    return (
        <div>
            <Card
                className=" h-full"
                hoverable
                style={{ width: 160 }}
                cover={
                    <div className=" h-[166px] object-cover">
                        <Image alt="product" src={src} className=" w-full" />
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
