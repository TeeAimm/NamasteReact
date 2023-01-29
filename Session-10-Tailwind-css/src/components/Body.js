import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper"
import useAllRestaurant from "../utils/useAllRestaurant";
import { FETCH_URL } from "../constants";
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
        const data = await fetch(FETCH_URL.GET_ALL_RESTAURANT);
        const json = await data.json();
        const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
        setAllRestaurant(restaurantList);
        setfilteredRestaurants(restaurantList);
    }
   
    return (!isOnline) ? <h1>You're offline..Please check internet connection! 🛑</h1> : allRestaurants?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="mb-4 flex justify-center"> 
                <input
                    type="text"
                    value={searchInput}
                    className="border h-11 px-4  border-gray-300"
                    placeholder="Search for restaurants"
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <button className="h-11 bg-[#fc8019] px-5 mx-4 hover:scale-x-105" onClick={() => {
                    let filteredList = filterData(searchInput, allRestaurants);
                    setfilteredRestaurants(filteredList)
                }}>Search</button>
                <button className="h-11 bg-gray-600 px-5 text-white hover:scale-x-105" onClick={() => {
                    setSearchInput('')
                    setfilteredRestaurants(allRestaurants)
                }}>Clear</button>
            </div>
            <div className="mx-16 text-4xl border-b-[1px] pb-2 border-gray-200 mb-4">{allRestaurants?.length} restaurants</div>
            <div className="grid grid-cols-4 mx-16">
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
