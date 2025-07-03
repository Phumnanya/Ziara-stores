import React from "react";
import { Flex, Box, Text, VStack, Button, Heading, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import StarRatings from 'react-star-ratings';

function Testimonials() {
    return(
        <>
            <Box bgColor={"gray.100"} w={"95%"} h={"fit-content"} fontFamily={"verdana"} p={"20px"} m={"1em auto"} boxSizing={"border-box"}>
                <Flex flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} m={"auto"} pb={"10px"}>
                    <VStack align={"start"}>
                        <Text color={"blackAlpha.500"}>TESTIMONIALS</Text>
                        <Text fontWeight={"bold"}>WHAT CUSTOMERS SAY</Text>
                    </VStack>
                    <Button color={"white"} bgColor={"black"}>VIEW ALL</Button>
                </Flex>

                {/**Testimonial 0 */}
                <Flex flexDir={"row"} justifyContent={"center"} alignItems={"center"} m={"auto"} flexWrap={"wrap"}>
                    <Card maxW='md' p={"5px"} boxSizing={"border-box"} m={"10px auto"}>
                        <CardHeader>
                            <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Jennifer Saunders' src='https://ik.imagekit.io/fvrl067t2/img/aiony-haust-3TLl_97HNJo-unsplash.jpg' />

                                <Box>
                                <Heading size='sm'>Jennifer Saunders</Heading>
                                <Text>from California</Text>
                                </Box>
                            </Flex>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
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
                            <Heading m={"15px 0px 8px 0px"} size={"sm"} boxSizing={"border-box"}>
                            Excellence in every detail and every service
                            </Heading>
                            <Text>
                            I have tried many fashion stores but Ziara truly stands out for exceptional quality and
                            unique style. The clothing feels luxurious and my style has honestly never looked better.
                            I love their transparency about materials and the eco-friendly packaging is a fantastic
                            touch that shows they care. Ziara has quickly become a staple in my wardrobe and I am
                            excited to explore.
                            </Text>
                        </CardBody>
                    </Card>

                    {/**Testimonial 1 */}
                    <Card maxW='md' p={"5px"} boxSizing={"border-box"} m={"10px auto"}>
                        <CardHeader>
                            <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Alana Drexel' src='https://ik.imagekit.io/fvrl067t2/img/raamin-ka-uR51HXLO7G0-unsplash.jpg' />

                                <Box>
                                <Heading size='sm'>Alana Drexel</Heading>
                                <Text>from Philadelphia</Text>
                                </Box>
                            </Flex>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <StarRatings
                                rating={5}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="gold"
                                starHoverColor="gold"
                                changeRating={(newRating) => console.log(newRating)}
                                numberOfStars={5}
                                name='rating0'
                                />
                            <Heading m={"15px 0px 8px 0px"} size={"sm"} boxSizing={"border-box"}>
                            Unmatched standards and reliable service
                            </Heading>
                            <Text>
                            After years of trying different stores I finally found Ziara, and it's been a game-changer.
                            The store is intuitive with tailored outfits that keep me confident every day. The quality
                            and comfort makes it enjoyable and fun, i feel healthy, stronger and have gained so much
                            confidence. I am excited to keep shopping here and see where it takes me. I also hope to 
                            see more of the good stuffs. 
                            </Text>
                        </CardBody>
                    </Card>
                </Flex>
            </Box>
        </>
    )
}

export default Testimonials;
