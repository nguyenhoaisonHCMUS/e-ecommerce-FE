import Image from "next/image";
import publics from "../../../public";
import ProductList from "./ProductList";
import { home2Lap, home2telephone } from "@/assets/imgs";

type listType = {
    id: string;
    src: string;
};
const products: listType[] = [
    { id: "1", src: publics.logo },
    { id: "2", src: publics.logo },
    { id: "3", src: publics.logo },
    { id: "4", src: publics.logo },
    { id: "5", src: publics.logo },
    { id: "6", src: publics.logo },
    { id: "7", src: publics.logo },
    { id: "8", src: publics.logo },
    { id: "9", src: publics.logo },
    { id: "10", src: publics.logo },
];

function LapProduct() {
    return (
        <div>
            <div className=" h-[200px]">
                <Image
                    src={home2Lap}
                    width={1200}
                    height={200}
                    alt=" telephone"
                />
            </div>
            <ProductList title="Laptop nổi bật" products={products} />
        </div>
    );
}

export default LapProduct;
