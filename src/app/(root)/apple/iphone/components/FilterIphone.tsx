"use client";
import useDebounce from "@/hooks/useDebounce";
import { Slider } from "antd";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

function FilterIphone() {
    const [searchName, setSearchName] = useState<string>("");
    const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

    const debouncedSearchValue = useDebounce(searchName, 700);

    //use debounceSearchValue to render data
    const onChangePrice = (value: number[]) => {
        setPriceRange(value);
    };
    const onChangeComplete = (value: number | number[]) => {
        console.log("onChangeComplete: ", value);
    };

    useEffect(() => {
        if (debouncedSearchValue) {
            console.log("Debounced search:", debouncedSearchValue);
        }
    }, [debouncedSearchValue]);

    return (
        <div>
            {/* filter */}
            <div className="sticky top-[72px]">
                <div className=" p-4 pb-10 shadow-xl rounded-md bg-white w-fit h-full">
                    <h2 className=" text-xl mb-3 font-bold text-center">
                        Bộ lọc
                    </h2>
                    <div>
                        <p>Mức giá</p>
                        <p>
                            {priceRange[0]} triệu - {priceRange[1]} triệu VNĐ
                        </p>
                        <Slider
                            value={priceRange}
                            range
                            step={1}
                            max={100}
                            min={0}
                            defaultValue={priceRange}
                            onChange={onChangePrice}
                            onChangeComplete={onChangeComplete}
                        />
                    </div>
                    <div className=" mt-3">
                        <p className=" mb-2">Tên</p>
                        <Input
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            placeholder="Nhập tên của máy"
                            prefix={<IoIosSearch />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterIphone;
