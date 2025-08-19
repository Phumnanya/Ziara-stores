import React from "react";
import StarRatings from 'react-star-ratings';

export default function Itembox({ pic, fashion, name, rating, price}) {
    return(
        <div className="shadow-2xl w-full p-4 font-verdana text-justify">
            <img src={`/img/${pic}`} alt={name} className="w-full object-cover h-52" />
            <p className="text-gray-500 my-2">{fashion}</p>
            <h4>{name}</h4>
            <StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing="5px"
                starRatedColor="gold"
                starHoverColor="gold"
                changeRating={(newRating) => console.log(newRating)}
                numberOfStars={5}
                name='rating'
                />
            <p className="font-bold my-1">${price}</p>
        </div>
    )
}