import {Popover,PopoverTrigger,PopoverContent,PopoverBody,PopoverArrow} from "@chakra-ui/react";
import { HamburgerIcon, IconButton, Box } from "@chakra-ui/icons";

export default function Popovers() {
    return(
        <>
            <Popover mr={{ base: "0px", md: "5px" }} isLazy>
                <PopoverTrigger>
                <Box display={"inline-block"}>
                    <IconButton icon={<HamburgerIcon boxSize={{ base: "4", md: "6" }} color={"black"} />} 
                    colorScheme={"black"} boxShadow={"dark-lg"} verticalAlign={"super"} />
                    </Box>
                </PopoverTrigger>
                <PopoverContent isLazy>
                    <PopoverArrow />
                    <PopoverBody>Menu1</PopoverBody>
                    <PopoverBody>Menu2</PopoverBody>
                    <PopoverBody>Menu3</PopoverBody>
                    <PopoverBody>Menu4</PopoverBody>
                </PopoverContent>
            </Popover>   
        </>
    )
}