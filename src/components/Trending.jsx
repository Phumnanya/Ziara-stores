import React from "react";
import { Flex, Box, Heading, Text, Image, } from "@chakra-ui/react";

function Trending() {
    return(
        <>
            <Box textAlign={"start"} p={"20px"}>
                <Heading size={"md"} fontFamily={"verdana"}>WEEKLY TRENDING</Heading>
                <Text>Unique trending items of the season are already on sale</Text>
            </Box>
            <Flex w={"97%"} h={"fit-content"} flexDir={"row"} flexWrap={"wrap"} justifyContent={"center"} 
            alignItems={"center"} m={"auto"} p={"30px"} boxSizing={"border-box"}>
                <Box m={"auto 3px 3px 3px"}>
                    <Image boxSize='lg' src='/img/andreas-weiss-qbMiJ8cfOkM-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
                <Box m={"auto 3px 3px 3px"}>
                    <Image boxSize='lg' src='https://ik.imagekit.io/fvrl067t2/img/ian-dooley-TT-ROxWj9nA-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
                <Box m={"auto 3px auto 3px"}>
                    <Image boxSize='lg' src='https://ik.imagekit.io/fvrl067t2/img/kristina-petrick-OJHNzGwqTSA-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
                <Box m={"auto 3px auto 3px"}>
                    <Image boxSize='lg' src='https://ik.imagekit.io/fvrl067t2/img/illia-melnichuk-ao7GtnjcBzo-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
            </Flex>
        </>
    )
}

export default Trending;
