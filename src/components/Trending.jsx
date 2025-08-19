import React from "react";
import { Flex, Box, Image, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Introbox from "../assets/body-comps/Introbox";

function Trending() {
    return(
        <>
            <Introbox htext="WEEKLY TRENDING" text="Unique trending items of the season are already on sale" />
            
            <Flex w={"80%"} h={"fit-content"} flexDir={"row"} justifyContent={"space-evenly"} 
            alignItems={"center"} m={"auto"} p={"12px"} boxSizing={"border-box"}>
                <Box m={"auto 3px 3px auto"} w={"23%"}>
                    <Image boxSize='sm' src='/img/andreas-weiss-qbMiJ8cfOkM-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
                <Box m={"auto 3px 3px auto"} w={"23%"}>
                    <Image boxSize='sm' src='/img/ian-dooley-TT-ROxWj9nA-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
                <Box m={"auto 3px auto auto"} w={"23%"}>
                    <Image boxSize='sm' src='/img/kristina-petrick-OJHNzGwqTSA-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
                <Box m={"auto 3px auto auto"} w={"23%"}>
                    <Image boxSize='sm' src='/img/illia-melnichuk-ao7GtnjcBzo-unsplash.jpg' objectFit={"cover"}
                    alt='woman on denim jacket' />
                </Box>
            </Flex>

            <Button fontFamily={"verdana"} textAlign={"center"} bg={"gray.300"} color={"blackAlpha.900"} w={"70%"} 
            display={"block"} margin={"auto"} borderRadius={"50px"} mb={"3em"} p={"12px"}>
            BUY NOW <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
            </Button>
        </>
    )
}

export default Trending;