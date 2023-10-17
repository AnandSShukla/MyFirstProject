import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  IMG_CDN_URL,
  IMG_CDN_URL_v1,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  swiggy_menu_api_URL,
} from "../../constants";
import Shimmer, { MenuShimmer } from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const params = useParams();
  console.log("id", params);
  const { id } = params;
  const [restaurants, setRestaurants] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    console.log("useffect");
    const data = getRestaurants();
    // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getRestaurants();
  //   };
  //   fetchData();
  // }, []);

  async function getRestaurants() {
    try {
      // debugger;
      const response = await fetch(swiggy_menu_api_URL + id);
      const Json = await response.json();
      const restaurantData =
        Json?.data?.cards
          ?.filter((x) => x.card)
          ?.find((x) => {
            return (
              x?.card?.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            );
          })?.card?.card?.info || null;
      // debugger;
      setRestaurants(restaurantData);
      // debugger;

      console.log(
        "important data to display",
        Json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter(
            (x) =>
              x["@type"] ==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          ?.map((x) => x.itemCards)
          .flat()
          ?.map((x) => x.card?.info) || []
      );

      // Set menu item data
      const menuItemsData =
        Json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      console.log("menu is not visible", menuItemsData);

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
        // debugger;
        console.log("iterating  ", uniqueMenuItems);
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      console.log(error);
      setMenuItems([]);
      setRestaurants(null);
    }
  }

  ///restaurant details header
  //menu list
  // dish details
  // more description
  //price
  //add to cart button
  return !restaurants ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurants?.cloudinaryImageId}
          alt={restaurants?.name}
        />

        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurants?.name}</h2>
          <p className="restaurant-tags">{restaurants?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurants?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurants?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              {/* <FontAwesomeIcon icon="fas fa-star" /> */}

              <FontAwesomeIcon
                icon={faStar}
                className="fas fa-star"
                //   style={{ color: "blue" }}
              />
              <span>{restaurants?.avgRating}</span> 
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurants?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurants?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems?.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems?.map((item) => (
              <div
                className="menu-item"
                key={item?.id}
              >
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
