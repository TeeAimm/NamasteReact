import RestaurantCard from "./RestaurantCard";
import { Restaurant_Data } from "../constants";

const Body = () => {
  const searchText = "Biriyani"
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          className="search-input"
          placeholder="Searce"
          onChange={(e) => { console.log("hit", e.target.value) }}
        />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {Restaurant_Data.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
