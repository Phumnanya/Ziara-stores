import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Center, VStack, Text } from "@chakra-ui/react";
import LearnMore from "../assets/header-comps/Carousel-button";

function Carousel() {
    
    return(
        <Splide
      options={{
        type: 'loop',
        arrows: false,
        perPage: 1,
        gap: '1rem',
        autoplay: true,
      }}
      aria-label="Carousel of products images"
    >
        <SplideSlide>
            <Center isLazy
            bgImage="url('/img/alexander-naglestad-RFhq0SrrgEg-unsplash.jpg')" bgSize="cover" bgRepeat="no-repeat" bgPos={"center"}
            bgAttachment={"fixed"} h={"300px"} >
                <VStack fontFamily={"sans-serif"} color={"white"}>
                    <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Express Yourself</Text>
                    <Text fontSize={"xl"}>with</Text>
                    <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Exclusive Collection</Text>
                    <LearnMore />
                </VStack>
            </Center>
        </SplideSlide>
        <SplideSlide>
            <Center isLazy
            bgImage="url('/img/chris-reyem-oJoeGnj8OMM-unsplash.jpg')" bgSize="cover" bgRepeat="no-repeat" 
            bgAttachment="fixed" h={"300px"} bgPos={"center"} >
                <VStack fontFamily={"sans-serif"} color={"black"}>
                <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Elevate Your Status</Text>
                <Text fontSize={"xl"}>with</Text>
                <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Luxury Brands</Text>
                <LearnMore />
                </VStack>
            </Center>
        </SplideSlide>
        <SplideSlide>
            <Center isLazy
            bgImage="url('/img/huy-nguyen-YhP-E5YwOGE-unsplash.jpg')" bgSize="cover" bgRepeat="no-repeat" 
            bgAttachment="fixed" h={"300px"} bgPos={"center"}>
                    <LearnMore />
            </Center>
        </SplideSlide>
    </Splide>
    )
}

export default Carousel;