import {Tabs,TabList,TabPanels,Tab,TabPanel, TabIndicator} from "@chakra-ui/react";
import {Box, Text, VStack, Flex, Button, Image} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function Shoptab() {
    return(
        <>
            <Tabs align="center" isManual variant='unstyled' defaultIndex={1}>
                <TabList mb='1em' color={"gray.500"}>
                    <Tab _selected={{color: "black"}}>SHOP MEN</Tab>
                    <Tab _selected={{color: "black"}}>SHOP WOMEN</Tab>
                    <Tab _selected={{color: "black"}}>SHOP KIDS</Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg={"blackAlpha.900"} borderRadius='1px' />

                <TabPanels>
                    {/**Shop Men's wears */}
                    <TabPanel>
                    <Flex flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} w={"95%"}>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/mohamad-khosravi-zCSlmX3-98I-unsplash.jpg?updatedAt=1751554867928' objectFit={"cover"}
                             alt='black tuxedo' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Tuxedos</Button>
                            </Box>
                        </Box>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/dami-adebayo-k6aQzmIbR1s-unsplash.jpg?updatedAt=1751554421072' objectFit={"cover"}
                             alt='leather jackets' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Leather</Button>
                            </Box>
                        </Box>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/patrick-amofah-cytUXI-fEOU-unsplash.jpg?updatedAt=1751555133136' objectFit={"cover"}
                             alt='agbada' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Agbada</Button>
                            </Box>
                        </Box>
                    </Flex>
                    </TabPanel>

                    {/**Shop Women wears */}
                    <TabPanel>
                    <Flex flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} w={"95%"}>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/dom-hill-nimElTcTNyY-unsplash.jpg' objectFit={"cover"}
                             alt='woman on sweat pants' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Sweat Pants</Button>
                            </Box>
                        </Box>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/alexanderafan-68EiF7-sU7w-unsplash.jpg' objectFit={"cover"}
                             alt='woman on denim jacket' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Denim Wears</Button>
                            </Box>
                        </Box>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/darko-mitev-c5t_j1zlk1Y-unsplash.jpg' objectFit={"cover"}
                             alt='woman on sleevless corporate' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Corporate</Button>
                            </Box>
                        </Box>
                    </Flex>
                    </TabPanel>

                    {/**Shop Kid's wears */}
                    <TabPanel>
                    <Flex flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} w={"95%"}>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/kristiina-glaase-DyL0KAEY70s-unsplash.jpg?updatedAt=1751554866582' objectFit={"cover"}
                             alt='kids jean and blouse' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Blouse</Button>
                            </Box>
                        </Box>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/terricks-noah-n9R0MN3XGvY-unsplash.jpg' objectFit={"cover"}
                             alt='casual wears' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Casual wears</Button>
                            </Box>
                        </Box>
                        <Box h={"fit-content"} w={"30%"}>
                            <Image boxSize='sm' src='https://ik.imagekit.io/fvrl067t2/img/kayan-baby-kPXq-jxhMkk-unsplash.jpg?updatedAt=1751554649450' objectFit={"cover"}
                             alt='kids gowns' />
                            <Box position={"relative"} bottom={"5em"}>
                                <Button color={"blackAlpha.900"} bg={"white"}>Gowns</Button>
                            </Box>
                        </Box>
                    </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Shoptab;
