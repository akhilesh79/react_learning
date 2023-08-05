import { useState, useEffect } from "react";

import RestaurantContainer from "./RestaurantContainer";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSwiggiData();
  }, []);

  const getSwiggiData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.768019017673062&lng=80.94607841223478&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      ); //returns promise and also data will not come in json format.

      const swiggiData = await response.json();
      setRestaurantData(swiggiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRes(swiggiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const searchRestaurant = () => {
    const filterResFromName = restaurantData.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilteredRes(filterResFromName);
  };

  const filterTopRatedRestaurant = () => {
    const filteredValue = filteredRes.filter((res) => res.info.avgRating > 4);
    setFilteredRes(filteredValue);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder=" Search Restaurants...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={() => searchRestaurant()}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={() => filterTopRatedRestaurant()}>
          Top-Rated Restaurant
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="res-container">
          {filteredRes.length === 0 ? (
            <h2>No Results Found</h2>
          ) : (
            filteredRes.map((data) => {
              return (
                <Link key={data?.info?.id} to={`/restaurants/${data?.info?.id}`} style={{ textDecoration: 'none' }}>
                  <RestaurantContainer resData={data} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
