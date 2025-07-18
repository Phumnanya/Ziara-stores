import React from "react";
import { Card, CardBody, VStack } from "@chakra-ui/react";
import { Box, Text, Image, Flex, Center, Button } from "@chakra-ui/react";
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Arrivals() {
    return(
        <>
            <Center w={'100%'}>
                    <Text fontSize={"xl"} m={"2em 0 2em 0"} fontFamily={"verdana"}>NEW ARRIVALS</Text>
            </Center>

            <Flex flexDir={"row"} alignItems={"center"} justifyContent={"center"} w={"92%"} fontFamily={"verdana"}
            m={"auto"} flexWrap={"wrap"}>

                <Box w={{ base: "100%", md: "30%" }} m={"auto"}>
                <Card w={"100%"}>
                    <CardBody>
                        <Image src='https://ik.imagekit.io/fvrl067t2/img/reza-delkhosh-iRAOJYtPHZE-unsplash.jpg' boxSize={"sm"}
                        alt='versace high class' objectFit={"cover"} />
                        <VStack align={"start"}>
                            <Text fontSize={"sm"} color={"gray.500"}>FASHION</Text>
                            <Text color={"black"} fontSize={"xl"}>Versace Classy</Text>
                            <StarRatings
                                rating={4}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="gold"
                                starHoverColor="gold"
                                changeRating={(newRating) => console.log(newRating)}
                                numberOfStars={5}
                                name='rating0'
                                />
                            <Text fontSize={"sm"} fontWeight={"bold"}>$85.17</Text>
                        </VStack>
                    </CardBody>
                </Card>
                </Box>

                <Box w={{ base: "100%", md: "30%" }} m={"auto"}>
                <Card w={"100%"}>
                    <CardBody>
                        <Image src='https://ik.imagekit.io/fvrl067t2/img/reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg' boxSize={"sm"}
                        alt='Fendi wears' objectFit={"cover"} />
                        <VStack align={"start"}>
                            <Text fontSize={"sm"} color={"gray.500"}>FASHION</Text>
                            <Text color={"black"} fontSize={"xl"}>Fendi All-in-one</Text>
                            <StarRatings
                                rating={4}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="gold"
                                starHoverColor="gold"
                                changeRating={(newRating) => console.log(newRating)}
                                numberOfStars={5}
                                name='rating0'
                                />
                            <Text fontSize={"sm"} fontWeight={"bold"}>$75.00</Text>
                        </VStack>
                    </CardBody>
                </Card>
                </Box>

                <Box w={{ base: "100%", md: "30%" }} m={"auto"}>
                <Card w={"100%"}>
                    <CardBody>
                        <Image src='https://ik.imagekit.io/fvrl067t2/img/aiony-haust-IXYxqP4zejo-unsplash.jpg' boxSize={"sm"}
                        alt='ramazotti vintage' objectFit={"cover"} />
                        <VStack align={"start"}>
                            <Text fontSize={"sm"} color={"gray.500"}>FASHION</Text>
                            <Text color={"black"} fontSize={"xl"}>Ramazotti Vintage</Text>
                            <StarRatings
                                rating={3.5}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="gold"
                                starHoverColor="gold"
                                changeRating={(newRating) => console.log(newRating)}
                                numberOfStars={5}
                                name='rating0'
                                />
                            <Text fontSize={"sm"} fontWeight={"bold"}>$69.50</Text>
                        </VStack>
                    </CardBody>
                </Card>
                </Box>

                <Center w={'100%'}>
                    <Button color={"gray.900"} m={"2em 0 2em 0"}>
                    Shop All Product <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Button>
                </Center>
            </Flex>
        </>
    );
}

export default Arrivals;
