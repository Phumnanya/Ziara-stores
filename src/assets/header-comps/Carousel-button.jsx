import React from "react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function LearnMore() {
    return(
        <Button colorScheme={"red"}>Learn more <FontAwesomeIcon icon={faExternalLink} className="ml-1" /></Button>
    )
}