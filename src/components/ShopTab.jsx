import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Box, Flex, Button, Image } from "@chakra-ui/react";
import Itembox from "../assets/body-comps/Itembox";

function Shoptab() {
    const Women = [
        { id: 0, pic: "https://ik.imagekit.io/fvrl067t2/ziara/reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg?updatedAt=1755611628792", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 1, pic: "https://ik.imagekit.io/fvrl067t2/ziara/reza-delkhosh-iRAOJYtPHZE-unsplash.jpg?updatedAt=1755611612493", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:83
         },
        { id: 2, pic: "https://ik.imagekit.io/fvrl067t2/ziara/raamin-ka-uR51HXLO7G0-unsplash.jpg?updatedAt=1755611616340", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:70
         },
        { id: 3, pic: "/img/ospan-ali-nyrSsBzhZ4Y-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:45
         },
        { id: 4, pic: "https://ik.imagekit.io/fvrl067t2/ziara/aiony-haust-IXYxqP4zejo-unsplash.jpg?updatedAt=1755611314671", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 5, pic: "https://ik.imagekit.io/fvrl067t2/ziara/alexanderafan-68EiF7-sU7w-unsplash.jpg?updatedAt=1755611335742", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 6, pic: "https://ik.imagekit.io/fvrl067t2/ziara/dom-hill-nimElTcTNyY-unsplash.jpg?updatedAt=1755611334546", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 7, pic: "https://ik.imagekit.io/fvrl067t2/ziara/premium_photo-1708276242787-387acf1bbd4b.jpeg?updatedAt=1755611577571", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
    ]
    const Men = [
        { id: 0, pic: "https://ik.imagekit.io/fvrl067t2/ziara/premium_photo-1707932485795-1d0aed727376.jpeg?updatedAt=1755611578042", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 1, pic: "https://ik.imagekit.io/fvrl067t2/ziara/premium_photo-1675130119382-6f891206f406.jpeg?updatedAt=1755611572606", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:83
         },
        { id: 2, pic: "https://ik.imagekit.io/fvrl067t2/ziara/mohamad-khosravi-5KyzZbonwqQ-unsplash.jpg?updatedAt=1755611514132", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:70
         },
        { id: 3, pic: "https://ik.imagekit.io/fvrl067t2/ziara/mohamad-khosravi-zCSlmX3-98I-unsplash.jpg?updatedAt=1755611523671", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:45
         },
        { id: 4, pic: "https://ik.imagekit.io/fvrl067t2/ziara/patrick-amofah-cytUXI-fEOU-unsplash.jpg?updatedAt=1755611599531", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 5, pic: "https://ik.imagekit.io/fvrl067t2/ziara/omid-bonyadian-lQ0bz51_cXM-unsplash.jpg?updatedAt=1755611602370", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 6, pic: "https://ik.imagekit.io/fvrl067t2/ziara/yasamine-june-tOubjwKS6f0-unsplash.jpg?updatedAt=1755611632728", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 7, pic: "/img/robiul-islam-pailot-vqyEjQlmps8-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
    ]
    return(
        <>
            <Tabs align="center" isManual variant='unstyled' defaultIndex={1}>
                <TabList mb='1em' color={"gray.500"}>
                    <Tab _selected={{color: "black"}} isLazy>SHOP MEN</Tab>
                    <Tab _selected={{color: "black"}}>SHOP WOMEN</Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg={"blackAlpha.900"} borderRadius='1px' />

                <TabPanels>
                    {/**Shop Men's wears */}
                    <TabPanel isLazy>
                        <div className="flex flex-row justify-between items-center flex-wrap">
                            {Men.map((product) => (
                                <div className="w-1/2 md:w-1/4 p-2">
                                    <Itembox 
                                        key={product.id}
                                        pic={product.pic}
                                        fashion={product.fashion}
                                        name={product.name}
                                        rating={product.rating}
                                        price={product.price}
                                    />
                                </div>
                            )
                            )}     
                        </div>
                    </TabPanel>

                    {/**Shop Women wears */}
                    <TabPanel isLazy>
                        <div className="flex flex-row justify-between items-center w-full flex-wrap">
                            {Women.map((product) => (
                                <div className="w-1/2 md:w-1/4 p-2">
                                    <Itembox 
                                        key={product.id}
                                        pic={product.pic}
                                        fashion={product.fashion}
                                        name={product.name}
                                        rating={product.rating}
                                        price={product.price}
                                    />
                                </div>
                            )
                            )}     
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}


export default Shoptab;
