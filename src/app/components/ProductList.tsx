import ProductCard from "@/components/ProductCard";

type listType = {
    id: string;
    src: string;
};
type ProductListType = {
    title: string;
    products: listType[];
};

function ProductList({ title = "Product Branch", products }: ProductListType) {
    return (
        <div className="my-5 ">
            <p className=" px-12 py-2 bg-secondary text-white font-bold uppercase mb-3 w-fit">
                {title}
            </p>
            <div className="product-list-wrapper">
                <div className="product-list-inner">
                    <div className="product-list-content p-4 shadow-xl rounded-md bg-white w-full my-auto">
                        <div className="product-list-grid grid grid-cols-5 gap-y-6 gap-x-4">
                            {products?.slice(0, 9).map((product) => {
                                return (
                                    <ProductCard
                                        src={product.src}
                                        key={product.id}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
