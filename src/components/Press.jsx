import {Tabs,TabList,TabPanels,Tab,TabPanel,} from "@chakra-ui/react";
import {Text, VStack, Divider} from "@chakra-ui/react"

function Press() {
  return (
    <>
    <Tabs isFitted variant="unstyled" isManual display="flex" flexDirection="column-reverse" align="center" mt={"2em"} 
    p={{ base: "10px", md: "20px" }} defaultIndex={1}>
      <TabList color={"gray.500"}>
        <Tab _selected={{color: "black"}}>
          <VStack>
          <Text fontSize={{ base: "sm", md: "sm" }} fontFamily={"Brush Script MT"}>Oliveira</Text>
          <Text fontSize={{ base: "xl", md: "3xl" }} fontFamily={"serif"}>LINDSAY</Text>
          </VStack>
        </Tab>
        <Tab _selected={{color: "black"}}>
          <VStack>
          <Text fontSize={{ base: "sm", md: "sm" }} fontFamily={"Brush Script MT"}>The</Text>
          <Text fontSize={{ base: "xl", md: "3xl" }} fontFamily={"Arial"}>BLACK WORLD</Text>
          </VStack>
        </Tab>
        <Tab _selected={{color: "black"}}>
          <VStack>
          <Text fontSize={{ base: "xl", md: "3xl" }} fontFamily={"Georgia"}>Salvador</Text>
          <Text fontSize={{ base: "sm", md: "xs" }} fontFamily={"cursive"}>BEAUTY & LIFESTYLE</Text>
          </VStack>
        </Tab>
      </TabList>

      <TabPanels pb={"2em"}>
        <TabPanel>
        <VStack>
          <Text fontSize={{ base: "sm", md: "xl" }} color={"gray.500"} fontFamily={"serif"}>IN THE PRESS</Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontFamily={"verdana"} textAlign={"center"}>
          "Beauty is within every woman, fashion is simply the art that reveals it to the world with elegance and grace."
          </Text>
          </VStack>
        </TabPanel>
        <TabPanel>
          <VStack>
          <Text fontSize={{ base: "sm", md: "xl" }} color={"gray.500"} fontFamily={"serif"}>IN THE PRESS</Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontFamily={"verdana"} textAlign={"center"}>
          "Fashion is about dressing according to what is fashionable. Style is more about being yourself."
          </Text>
          </VStack>
        </TabPanel>
        <TabPanel>
          <VStack>
          <Text fontSize={{ base: "sm", md: "xl" }} color={"gray.500"} fontFamily={"serif"}>IN THE PRESS</Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontFamily={"verdana"} textAlign={"center"}>
          "Dress shabbily and they remember the dress; dress impeccably and they remember the woman."
          </Text>
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <Divider boxShadow={"dark-lg"} mb={"3em"} />
    </>
  );
}

export default Press;