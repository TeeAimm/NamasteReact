import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantDetails();
    }, [])
    async function getRestaurantDetails() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=22.5735314&lng=88.4331189&menuId=" + resId);
        const json = await data.json();
        setRestaurant(json?.data)
        console.log(json, restaurant)
    }
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