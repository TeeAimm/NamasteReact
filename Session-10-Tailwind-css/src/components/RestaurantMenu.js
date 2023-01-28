import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurant = useRestaurant(resId);
    
    return !restaurant ? <Shimmer /> : (
        <>
            <div className="restaurant-menu">
                <img className="" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <div>
                    <h2>{restaurant?.name}</h2>
                    <div>{restaurant?.cuisines?.join(', ')}</div>
                    <div>{restaurant?.locality}, {restaurant?.area}</div>
                    <span>Rating: {restaurant?.avgRating}  |  </span>
                    <span>{restaurant?.costForTwoMsg}</span>
                </div>
            </div>

            <div>
                {(Object.values(restaurant?.menu?.items)).map((item) => {
                    return (
                        <MenuItem {...item} key={item.id} />
                    )
                })}
            </div>
        </>
    )
}

export default RestaurantMenu;