import useDebounce from "@/hooks/useDebounce";
import { Input, Select, Slider } from "antd";
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
const sizeOfScreen: Array<{ value: string; label: string }> = [
    { value: "12.6", label: "12.6" },
    { value: "14", label: "14" },
    { value: "15.6", label: "15.6" },
    { value: "18", label: "18" },
];
const screenResolution: Array<{ value: string; label: string }> = [
    { value: "1280x720", label: "1280x720" },
    { value: "1920x1080", label: "1920x1080" },
    { value: "2560x1440", label: "2560x1440" },
    { value: "4096x2160", label: "4096x2160" },
];
const storages: Array<{ value: string; label: string }> = [
    { value: "128", label: "128" },
    { value: "256", label: "256" },
    { value: "512", label: "512" },
    { value: "1024", label: "1T" },
];
const ram: Array<{ value: string; label: string }> = [
    { value: "4", label: "4" },
    { value: "8", label: "8" },
    { value: "16", label: "16" },
    { value: "32", label: "32" },
    { value: "64", label: "64" },
];
function FilterLap() {
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
                    <div className=" overflow-hidden mb-2">
                        <p className=" mb-2">Hãng laptop</p>
                        <Select
                            className=" min-w-[152px] w-full"
                            showSearch
                            placeholder="Chọn hãng laptop"
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

                    <div className=" overflow-hidden mt-3">
                        <p className=" mb-2">Kích thước màn hình</p>
                        <Select
                            className=" min-w-[152px] w-full"
                            showSearch
                            placeholder="Chọn kích thước màn hình"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={filterOption}
                            options={sizeOfScreen}
                        />
                    </div>

                    {/* Độ phân giải */}
                    <div className=" overflow-hidden mt-3">
                        <p className=" mb-2">Độ phân giải</p>
                        <Select
                            className=" min-w-[152px] w-full"
                            showSearch
                            placeholder="Chọn độ phân giải"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={filterOption}
                            options={screenResolution}
                        />
                    </div>
                    {/* Ram */}
                    <div className=" overflow-hidden mt-3">
                        <p className=" mb-2">RAM</p>
                        <Select
                            className=" min-w-[152px] w-full"
                            placeholder="RAM"
                            optionFilterProp="children"
                            onChange={onChange}
                            options={ram}
                        />
                    </div>
                    {/* O cung */}
                    <div className=" overflow-hidden mt-3">
                        <p className=" mb-2">Dung lượng ổ cứng</p>
                        <Select
                            className=" min-w-[152px] w-full"
                            placeholder="Dung lượng"
                            optionFilterProp="children"
                            onChange={onChange}
                            options={storages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterLap;
