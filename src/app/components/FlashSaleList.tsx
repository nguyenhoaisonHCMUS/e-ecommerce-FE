import { flashSale } from "@/assets/imgs";
import ProductSlides from "@/components/ProductSlides";
import { productType } from "@/types";
import { FaBoltLightning } from "react-icons/fa6";

const products: productType[] = [
    {
        id: "1",
        src: flashSale,
        name: "Vivo Y36 8GB/128GB",
        price: 4690000,
    },
    {
        id: "1",
        src: flashSale,
        name: "Vivo Y36 8GB/128GB",
        price: 4690000,
    },
    {
        id: "1",
        src: flashSale,
        name: "Vivo Y36 8GB/128GB",
        price: 4690000,
    },
    {
        id: "1",
        src: flashSale,
        name: "Vivo Y36 8GB/128GB",
        price: 4690000,
    },
    {
        id: "1",
        src: flashSale,
        name: "Vivo Y36 8GB/128GB",
        price: 4690000,
    },
    {
        id: "1",
        src: flashSale,
        name: "Vivo Y36 8GB/128GB",
        price: 4690000,
    },
    {
        id: "1",
        src: flashSale,
        name: "Vivo Y36 8GB/128GB",
        price: 4690000,
    },
];
function FlashSaleList() {
    return (
        <div className=" mt-5">
            <div className=" flex items-center text-orange-700">
                <p className=" uppercase text-xl  font-bold w-fit">
                    flash sale online
                </p>
                <FaBoltLightning className=" h-[40px] w-[40px]" />
            </div>
            <div className=" w-full">
                <ProductSlides products={products} />
            </div>
        </div>
    );
}

export default FlashSaleList;
