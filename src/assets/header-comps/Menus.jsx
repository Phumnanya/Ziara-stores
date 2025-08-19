import { IconButton, Search2Icon, Input, InputRightElement, InputGroup } from "@chakra-ui/icons";
import { Menu,MenuButton,MenuList,MenuItem} from "@chakra-ui/react";
import FocusLock from 'react-focus-lock';

export default function Menus() {
    return(
        <>
            <Menu isLazy>
                <MenuButton>
                <IconButton colorScheme={"inherit"} color={"black"} aria-label="search product" 
                icon={<Search2Icon />} borderRadius={"50px"} boxShadow={"dark-lg"} />
                </MenuButton>
                <MenuList>
                    <MenuItem isLazy>
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
        </>
    )
}