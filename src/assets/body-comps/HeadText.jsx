import React from "react";
import { Heading } from "@chakra-ui/react";

export default function HeadText(prop) {
    return(
        <Heading fontSize={"md"} fontFamily={"verdana"}>{prop.text}</Heading>
    )
}