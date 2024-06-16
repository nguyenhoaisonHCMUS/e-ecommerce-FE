"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ListSlidesType = {
    lists: string[];
    width: number;
    height: number;
};

function ListSlides({ lists, width, height }: ListSlidesType) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === lists.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? lists.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, nextSlide]);

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div
                    className="flex w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {lists.map((imageUrl, index) => (
                        <Image
                            width={width}
                            height={height}
                            key={index}
                            src={imageUrl}
                            alt={`Slide ${index + 1}`}
                            className="w-full"
                        />
                    ))}
                </div>
            </div>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-0 px-4 py-2 bg-gray-800 text-white rounded-l-lg"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-0 px-4 py-2 bg-gray-800 text-white rounded-r-lg"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
}

export default ListSlides;
