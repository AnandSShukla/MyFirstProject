import { RestaurantCard } from "./RestaurantCard";
import { restaurantsList, swiggy_api_URL } from "../../constants";
import "../../FoodVilla.css";
import { useEffect, useState } from "react";

const Body = () => {
  const[searchText, setSearchText]= useState("");

  
  //required array object 
    const card0 = restaurantsList.map((obj) => {
      const allRest = obj.info;
      return allRest;
    });

  const [restaurants, setReastaurants] = useState(card0);

  const filterList = (text, objArray) => {
   const filterData =  objArray.filter((objArray) =>
      objArray?.name?.toLowerCase().includes(text.toLowerCase())
    );
  
    return filterData;

  }
  // useEffect(() => {
  //   console.log("useeffect");
  // }, [searchText]);  
  // console.log("before");

  //CALL API HERE AND BUILD SEARCH FUNCTIONALITY
    useEffect(() => {
      //call fx to call Api
      getRestaurants();
    }, []);

    async function getRestaurants() {
      // swiggy_api_URL;
      // const response = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0803885&lng=72.8468571&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // )
      const response = await fetch(swiggy_api_URL );

      const resJson = await response.json();
      console.log("json    >>   ", response);

    }
  

    // console.log("card  0 n", card0);
  
    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              // filter the data
              const data = filterList(searchText, restaurants);
              // update the state of restaurants list
              setReastaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="Body">
          {/* <RestaurantCard {...card0}  /> */}

          <div className="restaurant-list">
            {restaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.id}
                  // {...restaurant.info}
                  {...restaurant}
                />
              );
            })}
          </div>
          {/* {RestaurantCard(card0)} */}
          {/* <RestaurantCard card0={card0} /> */}
          {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
        </div>
      </>
    );
  };

  export default Body ;
