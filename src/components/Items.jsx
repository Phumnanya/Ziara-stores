import React from "react";
import Itembox from "../assets/body-comps/Itembox";

function Items() {
    const products = [
        { id: 0, pic: "reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 1, pic: "reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 2, pic: "reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
        { id: 3, pic: "reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg", fashion: "FASHION",
            name: "Fendi All-in-one", rating: 4, price:75
         },
    ]
    return(
        <div className="flex flex-row justify-between items-center w-full md:flex-nowrap flex-wrap">
            {products.map((product) => (
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
    )
}

export default Items;