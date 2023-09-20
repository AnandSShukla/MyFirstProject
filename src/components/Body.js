import { RestaurantCard } from "./RestaurantCard";
import { restaurantsList } from "../../constants";
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
  useEffect(() => {
    console.log("useeffect");
  }, [searchText]);  
  console.log("before");
  

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
