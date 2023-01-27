import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper"
import useAllRestaurant from "../utils/useAllRestaurant";
import { GET_ALL_RESTAURANT_URL } from "../constants";
import useOnline from "../utils/useOnline";


const Body = () => {
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const isOnline = useOnline();
    useEffect(() => {
        getAllRestaurants()
        console.log("use effect")
    }, [])
    console.log("render ")
    async function getAllRestaurants() {
        const data = await fetch(GET_ALL_RESTAURANT_URL);
        const json = await data.json();
        const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
        setAllRestaurant(restaurantList);
        setfilteredRestaurants(restaurantList);
    }
   
    return (!isOnline) ? <h1>You're offline..Please check internet connection! 🛑</h1> : allRestaurants?.length === 0 ? (<Shimmer />) : (
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
