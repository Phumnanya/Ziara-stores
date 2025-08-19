import React from "react";
import Introbox from "../assets/body-comps/Introbox";
import Ziara from "../assets/body-comps/Ziara";
import Bottomlinks from "../assets/body-comps/Bottomlinks";
import { Text, Avatar } from "@chakra-ui/react";

function Bottom() {
    return(
        <div>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center font-verdana px-2 mb-2 w-full">
                <div className="w-full md:w-1/3">
                    <Introbox htext=<Ziara /> text="" />
                    <Text px={"15px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                    ante eget aliquam venenatis. Donec congue at ligula in cursus</Text><br />
                    <Text fontWeight={"bold"} px={"15px"}>FOLLOW US</Text>
                    <div className="flex flex-row justify-center items-center w-fit mt-4 px-4">
                        <div><a href="#"><Avatar name='https://img.icons8.com/fluency/48/facebook-new.png' size={"sm"} /></a></div>
                        <div><a href="#"><Avatar name='x' src='https://img.icons8.com/fluency/48/twitterx--v1.png' size={"sm"} /></a></div>
                        <div><a href="#"><Avatar name='instagram' src='https://img.icons8.com/color/48/instagram-new--v1.png' size={"sm"} /></a></div>
                        <div><a href="#"><Avatar name='linkedin' src='https://img.icons8.com/color/48/linkedin.png' size={"sm"} /></a></div>
                    </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-row justify-between items-center">
                        <Bottomlinks 
                            heading="INFO"
                            link0="ABOUT US"
                            link1="CONTACT US"
                            link2="STORE LOCATIONS"
                            link3="FAQS"
                            link4="TESTIMONIAL"
                        />
                        <Bottomlinks 
                            heading="SUPPORT"
                            link0="ADVICE"
                            link1="REFUND POLICY"
                            link2="TERMS & CONDITIONS"
                            link3="SHIPPING"
                            link4="SIZE GUIDE"
                        />
                        <Bottomlinks 
                            heading="ACCOUNT"
                            link0="WISHLIST"
                            link1="LOGIN"
                            link2="SIGNUP & REGISTER"
                            link3="COMPARE"
                            link4="CHECKOUT"
                        />
                </div>
            </div>
            <div className="text-center w-3/5 font-verdana m-auto">
                <p><a href="#"><Avatar name='headquarter' src='/img/icons8-location-24.png' size={"xs"} />
                Miami Store: 15 West 21th Street, Miami FL, USA
                </a></p>
            </div>
        </div>
    )
}

export default Bottom;


/**
 *    96
 * payment options 
 * https://img.icons8.com/external-those-icons-fill-those-icons/30/external-Apple-Pay-payment-methods-those-icons-fill-those-icons.png
 * https://img.icons8.com/color/30/paypal.png
 * https://img.icons8.com/color/30/visa.png
 * https://img.icons8.com/color/30/google-pay.png
 * 
 * 
 * 

                        

 */
