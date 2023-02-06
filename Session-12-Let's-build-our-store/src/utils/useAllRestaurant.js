import { useEffect } from "react";
import { FETCH_URL } from "../constants";

const useAllRestaurant = () => {
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    useEffect(() => {
        getAllRestaurants()
    }, [])
    async function getAllRestaurants() {
        const data = await fetch(FETCH_URL.GET_ALL_RESTAURANT);
        const json = await data.json();
        const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
        setAllRestaurant(restaurantList);
        setfilteredRestaurants(restaurantList);
    }
    return [allRestaurants,filteredRestaurants];
}

export default useAllRestaurant;