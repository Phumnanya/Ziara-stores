import { Heading } from "@chakra-ui/react"

export default function Ziara() {
    return(
        <Heading bgGradient={"linear(to-l, red, black, black)"} bgClip={"text"} fontSize={{ base: "3xl", md: "5xl" }} 
        fontWeight={"bold"} display={"inline-block"} ml={"8px"}>
            Ziara
        </Heading>
    )
}