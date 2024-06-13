"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
type searchInputType = {
    className: string;
};

function SearchInput({ className }: searchInputType) {
    const [searchValue, setSearchValue] = useState<string>("");
    console.log(searchValue);
    return (
        <div
            className={`${className} flex-between h-[42px] min-w-[310px] border-[1px] pr-2 rounded-md overflow-hidden border-slate-100 shadow-sm`}
        >
            <div className=" h-full w-[10%] bg-primary flex-center">
                <IoSearch className=" w-6 h-6" />
            </div>
            <input
                className="h-full  w-[90%] focus:outline-none pl-2"
                type="text"
                placeholder="Enter phone name..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    );
}

export default SearchInput;
