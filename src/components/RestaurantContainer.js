import { CDN_URI } from "../utils/constants";

const RestaurantContainer = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, avgRating, cuisines, name } = resData?.info;

  return (
    <div className="res-cards">
      <img className="krishna-prasad" src={CDN_URI + cloudinaryImageId} />
      <div className="food-name">
        <h4 style={{ fontSize: "0.8rem" }}>{name}</h4>
        <span className="rating-badge">{avgRating} star</span>
      </div>
      <div>
        <p className="food-cuisene">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantContainer;
