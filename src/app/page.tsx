import { home1Image } from "@/assets/imgs";
import ListSlides from "@/components/listSlides";
import FlashSaleList from "./components/FlashSaleList";
import AppleProduct from "./components/AppleProduct";
import TelephoneProduct from "./components/TelephoneProduct";
import LapProduct from "./components/LapProduct";
import CustomerList from "./components/CustomerList";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-between">
            <div className=" h-full flex-1">
                <ListSlides lists={home1Image} width={1200} height={375} />
                <FlashSaleList />
                <div className="">
                    <AppleProduct />
                    <TelephoneProduct />
                    <LapProduct />
                </div>
            </div>
            <div className="">
                <CustomerList />
            </div>
        </div>
    );
}
