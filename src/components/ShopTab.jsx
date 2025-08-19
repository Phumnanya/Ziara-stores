import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Box, Flex, Button, Image } from "@chakra-ui/react";
import Itembox from "../assets/body-comps/Itembox";

function Shoptab() {
    const Women = [
        { id: 0, pic: "reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 1, pic: "reza-delkhosh-iRAOJYtPHZE-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:83
         },
        { id: 2, pic: "raamin-ka-uR51HXLO7G0-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:70
         },
        { id: 3, pic: "ospan-ali-nyrSsBzhZ4Y-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:45
         },
        { id: 4, pic: "aiony-haust-IXYxqP4zejo-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 5, pic: "alexanderafan-68EiF7-sU7w-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 6, pic: "dom-hill-nimElTcTNyY-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 7, pic: "premium_photo-1708276242787-387acf1bbd4b.jpeg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
    ]
    const Men = [
        { id: 0, pic: "premium_photo-1707932485795-1d0aed727376.jpeg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 1, pic: "premium_photo-1675130119382-6f891206f406.jpeg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:83
         },
        { id: 2, pic: "mohamad-khosravi-5KyzZbonwqQ-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:70
         },
        { id: 3, pic: "mohamad-khosravi-zCSlmX3-98I-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:45
         },
        { id: 4, pic: "patrick-amofah-cytUXI-fEOU-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 5, pic: "omid-bonyadian-lQ0bz51_cXM-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 6, pic: "yasamine-june-tOubjwKS6f0-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 7, pic: "robiul-islam-pailot-vqyEjQlmps8-unsplash.jpg", fashion: "FASHION",
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