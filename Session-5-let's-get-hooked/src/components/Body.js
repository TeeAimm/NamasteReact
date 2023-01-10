import RestaurantCard from "./RestaurantCard";
import { Restaurant_Data } from "../constants";
import { useState } from "react";

function filterData(searchInput, restaurants) {
    let filteredList = restaurants.filter((item) => item?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()))
    return filteredList;
}

const Body = () => {
    const [searchInput, setSearchInput] = useState('');
    const [restaurants, setRestaurants] = useState(Restaurant_Data);
    return (
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
                    let filteredList = filterData(searchInput, Restaurant_Data);
                    setRestaurants(filteredList)
                }}>Search</button>
                <button onClick={() => {
                    setSearchInput('')
                    setRestaurants(Restaurant_Data)
                }}>Clear</button>
            </div>
            <div className="restaurant-list-container">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </>
    );
};

export default Body;
