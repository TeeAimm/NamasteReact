import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  //console.log("p--",props)
  return (
    <div className="restaurant-list">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3><i>{cuisines?.join(", ")}</i></h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
