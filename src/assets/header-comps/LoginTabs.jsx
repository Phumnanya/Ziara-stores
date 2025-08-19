import { Tabs, TabList, Tab } from '@chakra-ui/react'

export default function LoginTabs() {
    return(
        <>
            <Tabs variant='soft-rounded' colorScheme={"red"} display={"inline-block"}
             ml={{ base: "0px", md: "5px" }} size={{ base: "sm", md: "md" }}>
                <TabList color={"whiteAlpha.500"} p={{ base: "0px", md: "5px 8px" }} 
                borderRadius={"22px"} boxShadow={"dark-lg"}>
                    <Tab bg={"inherit"}>Login</Tab>
                    <Tab bg={"inherit"}>Signup</Tab>
                </TabList>
            </Tabs>
        </>
    )
}