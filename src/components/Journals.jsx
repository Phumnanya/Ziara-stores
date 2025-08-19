import React from "react";
import Introbox from "../assets/body-comps/Introbox";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { Image, Text } from "@chakra-ui/react";

function Journals() {
    const mark = (date) => {
        return date.toDateString();
    };
    const today = new Date();

    return(
        <>
            <Introbox htext="OUR JOURNAL" text="Discover fashion insights, style tips, and the latest trends here" />

            <div className="flex flex-row justify-between items-center w-full">
                <div className="w-1/3 p-1 md:p-3">
                    <Link to={"/"}>
                        <Image src='/img/toa-heftiba-KQ1n6HzSahY-unsplash.jpg' boxSize={"xs"} w={"100%"} h={"180px"}
                            alt='ramazotti vintage' objectFit={"cover"} mb={"1em"} />
                        <p className="text-gray-500">ACCESSORIES</p>
                        <p className="text-2xl font-bold my-8">
                        Layering Like a Pro: How to Style your Outfits for Every Season</p>
                        <p className="text-gray-500">{mark(today)}</p>
                    </Link>
                </div>
                <div className="w-1/3 p-1 md:p-3">
                    <Link to={"/"}>
                        <Image src='/img/nana-miya-GCDjllzoKLo-unsplash.jpg' boxSize={"xs"} w={"100%"} h={"180px"}
                            alt='ramazotti vintage' objectFit={"cover"} mb={"1em"} />
                        <p className="text-gray-500">ACCESSORIES</p>
                        <p className="text-2xl font-bold my-8">
                        Effortless Elegance: Styling Tips for a Polished Casual Look</p>
                        <p className="text-gray-500">{mark(today)}</p>
                    </Link>
                </div>
                <div className="w-1/3 p-1 md:p-3">
                    <Link to={"/"}>
                        <Image src='/img/freestocks-VFrcRtEQKL8-unsplash.jpg' boxSize={"xs"} w={"100%"} h={"180px"}
                            alt='ramazotti vintage' objectFit={"cover"} mb={"1em"} />
                        <p className="text-gray-500">ACCESSORIES</p>
                        <p className="text-2xl font-bold my-8">
                        Luxury Meets Comfort: Making High-End Pieces Everyday</p>
                        <p className="text-gray-500">{mark(today)}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Journals;