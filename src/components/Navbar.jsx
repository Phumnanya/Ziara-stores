import React from "react";
import { Box, Flex, IconButton, Divider } from '@chakra-ui/react'
import { StarIcon, BellIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Popovers from "../assets/header-comps/Popover";
import Menus from "../assets/header-comps/Menus";
import LoginTabs from "../assets/header-comps/LoginTabs";
import Ziara from "../assets/body-comps/Ziara";

function Navbar() {
    return(
        <>
        <div className="p-1 bg-white flex flex-row justify-between items-center w-full">
            <div className="w-5/12 flex flex-row items-center font-verdana">
                <Popovers />       
                <Ziara />
            </div>

            <div className="flex flex-row items-center">
                <Menus />
                <IconButton colorScheme={"inherit"} color={"black"} aria-label="rate product" 
                    icon={<FontAwesomeIcon icon={faShoppingCart} />} borderRadius={"50px"} 
                    boxShadow={"dark-lg"} 
                    display={"inline-block"} ml={{ base: "0px", md: "5px" }} />   
                <LoginTabs />           
            </div>
        </div>
        <Divider boxShadow={"dark-lg"} />
        </>
    )
}

export default Navbar;

/*
*
<IconButton colorScheme={"inherit"} color={"black"} aria-label="notify me" 
                icon={<BellIcon />} borderRadius={"50px"} boxShadow={"dark-lg"} 
                display={{ base: "none", md: "inline-block" }} ml={{ base: "0px", md: "5px" }} />
*/