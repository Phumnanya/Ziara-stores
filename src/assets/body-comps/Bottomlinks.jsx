import { Stack, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Bottomlinks(prop) {
    return(
        <Stack color={"gray.800"} textAlign={"start"} fontFamily={"verdana"} w={"100%"}>
            <Heading color={"black"} fontSize={{base: "sm", md: "md"}}>{prop.heading}</Heading>
            <Link to={"/"}><Text fontSize={{base: "sm", md: ""}}>{prop.link0}</Text></Link>
            <Link to={"/"}><Text fontSize={{base: "sm", md: ""}}>{prop.link1}</Text></Link>
            <Link to={"/"}><Text fontSize={{base: "sm", md: ""}}>{prop.link2}</Text></Link>
            <Link to={"/"}><Text fontSize={{base: "sm", md: ""}}>{prop.link3}</Text></Link>
            <Link to={"/"}><Text fontSize={{base: "sm", md: ""}}>{prop.link4}</Text></Link>
        </Stack>
    )
}