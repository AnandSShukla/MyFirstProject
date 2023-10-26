import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurants] = useState(null);

  //get data from api
  //CALL API HERE AND BUILD SEARCH FUNCTIONALITY
  useEffect(() => {
    console.log("inside of effect hook");
    //call fx to call Api
    getRestaurants();
  }, []);

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
      // Set menu item data
      //    const menuItemsData =
      //      Json?.data?.cards
      //        .find((x) => x.groupedCard)
      //        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      //        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
      //        ?.map((x) => x.itemCards)
      //        .flat()
      //        .map((x) => x.card?.info) || [];

      //    console.log("menu is not visible", menuItemsData);

      //    const uniqueMenuItems = [];
      //    menuItemsData.forEach((item) => {
      //      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
      //        uniqueMenuItems.push(item);
      //      }
      //      // debugger;
      //      console.log("iterating  ", uniqueMenuItems);
      //    });
      //    setMenuItems(uniqueMenuItems);
    } catch (error) {
      console.log(error);
      //    setMenuItems([]);
      setRestaurants(null);
    }
  }

  return restaurant;
};

export default useRestaurant;
