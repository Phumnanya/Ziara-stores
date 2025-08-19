import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import { Text, HStack } from "@chakra-ui/react";

function Marq() {
    return(
        <>
        <Marquee>
            <HStack>
                <FontAwesomeIcon icon={faBolt} color="goldenrod" />
                <Text display={"inline-block"}>
                    FREE SHIPPING ON ALL US ORDER OR ORDER ABOVE $200
                </Text>
                <FontAwesomeIcon icon={faBolt} color="goldenrod" />
            </HStack>
        </Marquee>
        </>
    )
}

export default Marq;


//--legacy-peer-deps