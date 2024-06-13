"use client";

import { Select, Slider } from "antd";
import { Input, Space } from "antd";
import { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

// Filter `option.label` match the user type `input`
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

export default function TelephoneLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
    return (
        <div className=" max-w-[1200px] w-[90%] mx-auto flex gap-8">
            {/* filter */}
            <div className=" p-2 shadow-xl rounded-md bg-white w-fit h-[96%] my-auto">
                <h2 className=" text-xl mb-3 ">Bộ lọc</h2>
                <div className=" overflow-hidden mb-2">
                    <p className=" mb-2">Hãng điện thoại</p>
                    <Select
                        className=" min-w-[152px]"
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
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch2}
                        enterButton
                    />
                </div>
            </div>

            <div className=" flex-1 p-2 shadow-xl rounded-md bg-white w-full h-[96%] my-auto">
                {children}
            </div>
        </div>
    );
}
