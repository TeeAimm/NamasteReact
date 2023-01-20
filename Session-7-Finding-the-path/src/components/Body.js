import RestaurantCard from "./RestaurantCard";
import { Restaurant_Data } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
    let filteredList = restaurants.filter((item) => item?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()))
    return filteredList;
}

const Body = () => {
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        getAllRestaurants()
        console.log("use effect")
    }, [])
    console.log("render ")
    async function getAllRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5735314&lng=88.4331189&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
        setAllRestaurant(restaurantList);
        setfilteredRestaurants(restaurantList);
    }
    return allRestaurants?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    value={searchInput}
                    className="search-input"
                    placeholder="Search"
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <button className="search-btn" onClick={() => {
                    let filteredList = filterData(searchInput, allRestaurants);
                    setfilteredRestaurants(filteredList)
                }}>Search</button>
                <button onClick={() => {
                    setSearchInput('')
                    setfilteredRestaurants(allRestaurants)
                }}>Clear</button>
            </div>
            <div className="restaurant-list-container">
                {filteredRestaurants.length === 0 ? <h1>No restaurant found. Try again!!</h1> : filteredRestaurants?.map((restaurant) => {
                    return (
                        <Link to={'restaurant/' + restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
