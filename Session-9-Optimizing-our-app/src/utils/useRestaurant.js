import { useState, useEffect } from "react";
import { FETCH_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantDetails();
    }, [])

    async function getRestaurantDetails() {
        const data = await fetch(FETCH_URL.GET_RESTAURANT_MENU + resId);
        const json = await data.json();
        setRestaurant(json?.data)
        console.log('menu - ', json, restaurant)
    }
    return restaurant;
}

export default useRestaurant;