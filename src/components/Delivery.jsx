import React from "react";
import { Flex, Box, Stack, Heading, Text, Image, Avatar } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTShirt } from "@fortawesome/free-solid-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";

function Delivery() {
    return(
        <>
            <Flex flexDir={"row"} w={"95%"} justifyContent={"center"} alignItems={"center"} fontFamily={"verdana"} p={"20px"} m={"1em auto"}
            h={"fit-content"} flexWrap={"wrap"}>
                {/**Delivery 0 */}
                <Box p={'10px'} boxSizing="border-box" m={"auto"} pb={"10px"} w={"47%"}>
                    <Stack align={"start"}>
                        <Avatar name='fabric' src='/img/icons8-fabric-sample-96.png' />
                        <Heading size={"sm"}>Sustainable Materials</Heading>
                        <Text>Experience eco-friendly shopping with products made from sustainably sourced
                        materials.
                        </Text>
                    </Stack>
                </Box>

                {/**Delivery 1 */}
                <Box p={'10px'} boxSizing="border-box" m={"auto"} pb={"10px"} w={"47%"}>
                    <Stack align={"start"}>
                        <Avatar name='30 days free return' src='/img/icons8-return-64.png' />
                        <Heading size={"sm"}>30 Days Free Returns</Heading>
                        <Text>Shop with complete confidence, knowing that you're covered by our 30-day free return
                        policy on all of our products.
                        </Text>
                    </Stack>
                </Box>

                {/**Delivery 2 */}
                <Box p={'10px'} boxSizing="border-box" m={"auto"} pb={"10px"} w={"47%"}>
                    <Stack align={"start"}>
                        <Avatar name='free delivery' src='/img/icons8-free-shipping-48.png' />
                        <Heading size={"sm"}>Free Delivery</Heading>
                        <Text>Enjoy free delivery on all orders exceeding 200 USD, bringing more value to your
                        shopping experience.
                        </Text>
                    </Stack>
                </Box>

                {/**Delivery 3 */}
                <Box p={'10px'} boxSizing="border-box" m={"auto"} pb={"10px"} w={"47%"}>
                    <Stack align={"start"}>
                        <Avatar name='cash on delivery' src='/img/icons8-cash-on-delivery-96.png' />
                        <Heading size={"sm"}>COD</Heading>
                        <Text>Enjoy the convenience of cash on delivery (COD) for a secure and hassle-free
                        shopping experience.
                        </Text>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}

export default Delivery;




/* which is not only beneficial to the students but to the tutors as well. It is aimed at  that private lesson tutors who have multiple clients have to go through by moving through those multiple locations everyday by bringing them together under one safe platform to still carry out their lessons effectively. It will also aim at transforming and revitalising the private lesson/extra school lesson tutor job section into a more lucrative sector, because it can now enable tutors to have multiple students and allocate different time and schedules to them and generate more income for the tutors personally depending on the number of subscribers they have.*/