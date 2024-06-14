"use client";

import FilterPhone from "./components/FilterPhone";

// Filter `option.label` match the user type `input`

export default function TelephoneLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" max-w-[1200px] w-[90%] mx-auto flex ">
            <FilterPhone />
            <div className=" p-4">
                <div className=" flex-1 p-4 shadow-xl rounded-md bg-white w-full my-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
