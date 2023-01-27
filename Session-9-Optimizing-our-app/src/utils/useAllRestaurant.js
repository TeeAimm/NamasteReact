import { useEffect } from "react";
import { GET_ALL_RESTAURANT_URL } from "../constants";

const useAllRestaurant = () => {
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    useEffect(() => {
        getAllRestaurants()
        console.log("use effect")
    }, [])
    async function getAllRestaurants() {
        const data = await fetch(GET_ALL_RESTAURANT_URL);
        const json = await data.json();
        const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
        setAllRestaurant(restaurantList);
        setfilteredRestaurants(restaurantList);
    }
    return [allRestaurants,filteredRestaurants];
}

export default useAllRestaurant;