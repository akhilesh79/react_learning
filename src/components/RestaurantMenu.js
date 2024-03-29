import { useParams } from "react-router-dom";

import Loader from "./Loader";
import useMenuData from "../utils/customHooks/useMenuData";
import { ITEM_IMAGE_URI } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useMenuData(resId);

  // if (!menuData) return <Loader type={"menu"}/>;

  const { info: restaurantData } = menuData?.cards[0]?.card?.card || {};
  const { name, cuisines, city, costForTwoMessage, avgRating, totalRatingsString } = restaurantData || {};

  const { cards } = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR || [];

  return !menuData ? (
    <Loader type={"menu"} />
  ) : (
    <div className="menu-container">
      <div className="resturant-discription">
        <div className="res-price">
          <h3>{name}</h3>
          <p>{cuisines?.join(", ")}</p>
          <p>
            {city}- {costForTwoMessage}
          </p>
        </div>
        <div className="res-rating">
          <h3>{avgRating}-star</h3>
          <hr />
          <h5>{totalRatingsString}</h5>
        </div>
      </div>
      <div className="restaurant-menu">
        <h4>{cards[2].card.card.title}</h4>
        {cards[2]?.card?.card?.itemCards?.map((item) => {
          return (
            <div className="item-card">
              <div className="item-dis">
                <h5>{item?.card?.info?.name}</h5>
                <p>{item?.card?.info?.description}</p>
              </div>
              <div className="item-img">
                <img src={ITEM_IMAGE_URI + item?.card?.info?.imageId} width={"100px"} height={"100px"}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
