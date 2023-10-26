import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, swiggy_menu_api_URL } from "../../constants";

const useMenu = (id) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      // debugger;

      const response = await fetch(swiggy_menu_api_URL + id);
      const Json = await response.json();
      // Set menu item data
      const menuItemsData =
        (await Json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info)) || [];

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
      //  setRestaurants(null);
    }
  }

  return menuItems;
};

export default useMenu;
