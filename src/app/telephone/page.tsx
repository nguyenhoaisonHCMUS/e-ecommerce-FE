import publics from "../../../public";
import ProductCard from "./components/ProductCard";

function PhonePage() {
    return (
        <div className=" grid grid-cols-5 gap-y-6">
            <ProductCard src={publics.logo} />
            <ProductCard src={publics.logo} />
            <ProductCard src={publics.logo} />
            <ProductCard src={publics.logo} />
            <ProductCard src={publics.logo} />
            <ProductCard src={publics.logo} />
        </div>
    );
}

export default PhonePage;
