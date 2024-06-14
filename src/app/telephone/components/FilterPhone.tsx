import useDebounce from "@/app/hooks/useDebounce";
import { Select, Slider } from "antd";
import { Input, Space } from "antd";
import { SearchProps } from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const filterOption = (
    input: string,
    option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const brands: Array<{ value: string; label: string }> = [
    { value: "Apple", label: "Apple" },
    { value: "SamSung", label: "SamSung" },
    { value: "Xiaomi", label: "Xiaomi" },
    { value: "Lenovo", label: "Lenovo" },
];

function FilterPhone() {
    const [searchName, setSearchName] = useState<string>("");
    const debouncedSearchValue = useDebounce(searchName, 700);
    //use debounceSearchValue to render data

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log("search:", value);
    };

    const onChangeComplete = (value: number | number[]) => {
        console.log("onChangeComplete: ", value);
    };
    const onSearch2: SearchProps["onSearch"] = (value, _e, info) =>
        console.log(info?.source, value);

    useEffect(() => {
        if (debouncedSearchValue) {
            console.log("Debounced search:", debouncedSearchValue);
        }
    }, [debouncedSearchValue]);

    return (
        <div>
            {/* filter */}
            <div className=" p-4 sticky top-[72px]">
                <div className=" p-4 pb-10 shadow-xl rounded-md bg-white w-fit h-full">
                    <h2 className=" text-xl mb-3 font-bold text-center">
                        Bộ lọc
                    </h2>
                    <div className=" overflow-hidden mb-2">
                        <p className=" mb-2">Hãng điện thoại</p>
                        <Select
                            className=" min-w-[152px] w-full"
                            showSearch
                            placeholder="Chọn hãng điện thoại"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={filterOption}
                            options={brands}
                        />
                    </div>

                    <div>
                        <p>Mức giá</p>
                        <Slider
                            range
                            step={1}
                            max={100}
                            min={0}
                            defaultValue={[0, 500]}
                            // onChange={onChange}
                            onChangeComplete={onChangeComplete}
                        />
                    </div>
                    <div className=" mt-3">
                        <p className=" mb-2">Tên</p>
                        <Input
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            placeholder="default size"
                            prefix={<IoIosSearch />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterPhone;
