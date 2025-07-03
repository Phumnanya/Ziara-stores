import React from "react";
import FocusLock from 'react-focus-lock';
import { Box, Flex, IconButton, Text, Input, InputRightElement, InputGroup } from '@chakra-ui/react'
import { HamburgerIcon, Search2Icon, StarIcon, BellIcon } from "@chakra-ui/icons";
import {Popover,PopoverTrigger,PopoverContent,PopoverBody,PopoverArrow} from "@chakra-ui/react";
import { Menu,MenuButton,MenuList,MenuItem} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Divider } from "@chakra-ui/react";

function Navbar() {
    return(
        <>
        <Flex p={"4px"} bg="white.500" flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} 
        w={"100%"}>
        <Box w={"45%"}>
            <Popover mr={{ base: "0px", md: "5px" }}>
                <PopoverTrigger>
                <Box display={"inline-block"}>
                    <IconButton icon={<HamburgerIcon boxSize={{ base: "4", md: "8" }} color={"black"} />} colorScheme={"black"}
                    boxShadow={"dark-lg"} verticalAlign={"super"} />
                    </Box>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>Menu1</PopoverBody>
                    <PopoverBody>Menu2</PopoverBody>
                    <PopoverBody>Menu3</PopoverBody>
                    <PopoverBody>Menu4</PopoverBody>
                </PopoverContent>
            </Popover>            
            <Text bgGradient={"linear(to-l, red, black, black)"} bgClip={"text"} fontSize={{ base: "3xl", md: "5xl" }} fontWeight={"bold"}
             display={"inline-block"} ml={"8px"}>
                Ziara
            </Text>
            </Box>

            <Flex justifyContent={"flex-end"} alignItems={"center"}>
            <Menu>
                <MenuButton>
                <IconButton colorScheme={"inherit"} color={"black"} aria-label="search product" 
                icon={<Search2Icon />} borderRadius={"50px"} boxShadow={"dark-lg"} />
                </MenuButton>
                <MenuList>
                    <MenuItem>
                    <FocusLock returnFocus persistentFocus={false}>
                        <InputGroup size={"lg"}>
                            <Input placeholder="Search product" />
                            <InputRightElement width={"4.5rem"}>
                                <IconButton colorScheme={"red"} color={"white"} aria-label="search" 
                                icon={<Search2Icon />} />
                            </InputRightElement>
                        </InputGroup>
                        </FocusLock>
                    </MenuItem>
                </MenuList>
            </Menu>
              
            <IconButton colorScheme={"inherit"} color={"black"} aria-label="rate product" 
                icon={<StarIcon />} borderRadius={"50px"} boxShadow={"dark-lg"} 
                display={{ base: "none", md: "inline-block" }} ml={{ base: "0px", md: "5px" }} />
            
            <IconButton colorScheme={"inherit"} color={"black"} aria-label="notify me" 
                icon={<BellIcon />} borderRadius={"50px"} boxShadow={"dark-lg"} 
                display={{ base: "none", md: "inline-block" }} ml={{ base: "0px", md: "5px" }} />
                        
            <Tabs variant='soft-rounded' colorScheme={"red"} display={"inline-block"} ml={{ base: "0px", md: "5px" }}>
                <TabList color={"whiteAlpha.500"} p={{ base: "0px", md: "5px 8px" }} borderRadius={"22px"} 
                boxShadow={"dark-lg"}>
                    <Tab bg={"inherit"}>Login</Tab>
                    <Tab bg={"inherit"}>Signup</Tab>
                </TabList>
            </Tabs>           
            </Flex>
        </Flex>
        <Divider boxShadow={"dark-lg"} />
        </>
    )
}

export default Navbar;


//<Text color="white">Hello from Chakra UI</Text>
//<IconButton aria-label="dropdown menu" icon={"HamburgerIcon"} color={"black"} bg={"yellow"} />
/*
<Slider aria-label='slider-ex-1' defaultValue={0} display={"inline-block"} ml={"15px"} w={"80px"}>
                    <SliderTrack bg={"red"}>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb w={"fit content"} bg={"green.400"} p={"10px"}>Login</SliderThumb>
                </Slider>

                <TabPanels>
                        <TabPanel>
                        <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>two!</p>
                        </TabPanel>
                    </TabPanels>
*/