import { Box, Text, Heading } from "@chakra-ui/react"

export default function Introbox(prop) {
    return(
        <>
            <Box textAlign={"start"} p={"20px"}>
                <Heading size={"md"} fontFamily={"verdana"}>{prop.htext}</Heading>
                <Text>{prop.text}</Text>
            </Box>
        </>
    )
}