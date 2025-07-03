import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Box, Text, Button, VStack, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function Carousel() {
    
    return(
        <Splide
      options={{
        type: 'loop',
        perPage: 1,
        gap: '1rem',
        autoplay: true,
      }}
      aria-label="Carousel of products images"
    >
        <SplideSlide>
            <Center
            bgImage="url('/img/alexander-naglestad-RFhq0SrrgEg-unsplash.jpg')" bgSize="cover" bgRepeat="no-repeat" bgPos={"center"}
            bgAttachment={"fixed"} h={"300px"} >
                <VStack fontFamily={"sans-serif"} color={"white"}>
                    <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Express Yourself</Text>
                    <Text fontSize={"xl"}>with</Text>
                    <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Exclusive Collection</Text>
                    <Button colorScheme={"red"}>Learn more <FontAwesomeIcon icon={faExternalLink}/> </Button>
                </VStack>
            </Center>
        </SplideSlide>
        <SplideSlide>
            <Center
            bgImage="url('https://ik.imagekit.io/fvrl067t2/img/chris-reyem-oJoeGnj8OMM-unsplash.jpg')" bgSize="cover" bgRepeat="no-repeat" 
            bgAttachment="fixed" h={"300px"} bgPos={"center"} >
                <VStack fontFamily={"sans-serif"} color={"black"}>
                    <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Elevate Your Status</Text>
                    <Text fontSize={"xl"} fontWeight={"bold"}>with</Text>
                    <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight={"bold"}>Luxury Brands</Text>
                    <Button colorScheme={"red"}>Learn more <FontAwesomeIcon icon={faExternalLink}/> </Button>
                </VStack>
            </Center>
        </SplideSlide>
        <SplideSlide>
            <Center
            bgImage="url('https://ik.imagekit.io/fvrl067t2/img/huy-nguyen-YhP-E5YwOGE-unsplash.jpg')" bgSize="cover" bgRepeat="no-repeat" 
            bgAttachment="fixed" h={"300px"} bgPos={"center"}>
                    <Button colorScheme={"red"} color={"white"} fontFamily={"sans-serif"}>
                    Learn more <FontAwesomeIcon icon={faExternalLink}/> 
                    </Button>
            </Center>
        </SplideSlide>
    </Splide>
    )
}

export default Carousel;
