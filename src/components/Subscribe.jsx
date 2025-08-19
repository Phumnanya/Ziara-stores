import React from "react";
import { Heading, Input, InputGroup, InputRightAddon, VStack, Button, Text } from "@chakra-ui/react";

function Subscribe() {
    return(
        <div className="text-center bg-gray-300 w-full my-10 h-fit p-3">
        <VStack margin={"3em 0em 3em 0em"} fontFamily={"verdana"}>
            <Heading size={{base: "sm", md: "sm"}}>
                SUBSCRIBE AND GET 15% DISCOUNT
            </Heading>
            <InputGroup margin={"3em auto 3em auto"} w={{base: "95%", md: "60%"}} size={"md"}>
                <Input type="email" placeholder="Enter email" focusBorderColor="lime" bg={"white"} borderRadius={"3xl"}  />
                <Button bg={"black"} color={"white"} borderRadius={"lg"} p={"10px"} size={"md"}>
                Subscribe</Button>
            </InputGroup>
            <Text>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy</Text>
        </VStack>
        </div>
    )
}

export default Subscribe;