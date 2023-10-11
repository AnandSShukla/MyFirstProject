import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL, IMG_CDN_URL_v1, swiggy_menu_api_URL } from "../../constants";
import Shimmer, { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  console.log("id", params);
  const { id } = params;
  const [restaurants, setRestaurants] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    console.log("useffect");
    const data = getRestaurants(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
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


      // console.log("json response of menu ", Json);
      const restaurantData =
        Json?.data?.cards
          ?.map((x) => x.card)
          ?.find(
            (x) =>
              x &&
              x.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )?.card?.info || null;

      console.log("log data", restaurantData);
      setRestaurants(restaurantData);
      console.log("Restaurants Data:", restaurantData);


      // Set menu item data
      // const menuItemsData = await Json?.data?.cards?.find((x) => x.groupedCard)
        // ?.cardGroupMap;
;

debugger;
        const menuItemsDataNew = await Json?.data?.cards?.filter((x) => {
          console.log('nyam nyam: ', x);
          return Object.keys(x)[0] == "groupedCard";
        })
        console.log("menu data data ??????????", menuItemsDataNew[0].groupedCard.cardGroupMap);


      // debugger;

      //     .find((x) => x.groupedCard)
      //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      //     ?.filter(
      //       (x) =>
      //         x["@type"] ==
      //         "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
      //     )
      //     ?.map((x) => x.itemCards)
      //     .flat()
      //     .map((x) => x.card?.info) || [];

      // const uniqueMenuItems = [];
      // menuItemsData.forEach((item) => {
      //   if (!uniqueMenuItems.find((x) => x.id === item.id)) {
      //     uniqueMenuItems.push(item);
      //   }
      // });
      // setMenuItems(uniqueMenuItems);
      // console.log("Menu Items:", uniqueMenuItems);
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
      </div>

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
            <i className="fa-solid fa-star"></i>
            <span>{restaurants?.avgRating}</span>
          </div>
          <div className="restaurant-rating-slash">|</div>
          <div>{restaurants?.sla?.slaString}</div>
          <div className="restaurant-rating-slash">|</div>
          <div>{restaurants?.costForTwoMessage}</div>
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
