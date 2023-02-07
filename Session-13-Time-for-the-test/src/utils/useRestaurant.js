import { useState, useEffect } from "react";
import { FETCH_URL } from "../constants";
import { useDispatch } from "react-redux";
import { setCurrentRestaurant } from "./restaurantSlice";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        getRestaurantDetails();
    }, [])

    async function getRestaurantDetails() {
        const data = await fetch(FETCH_URL.GET_RESTAURANT_MENU + resId);
        const json = await data.json();
        setRestaurant(json?.data)
        {dispatch(setCurrentRestaurant({resName: json?.data?.name, resArea: json?.data?.area, resImage: json?.data?.cloudinaryImageId, resId: json?.data?.id}))}
    }
    return restaurant;
}

export default useRestaurant;