import { RestaurantCard } from "./RestaurantCard";
import { restaurantsList, swiggy_api_URL } from "../../constants";
import "../../FoodVilla.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";




// Filter the restaurant data according input type
const filterList = (text, objArray) => {
  const filterData =  objArray.filter((objArray) =>
     objArray?.name?.toLowerCase().includes(text.toLowerCase())
   );
 
   return filterData;

 }

// Body Component for body section: It contain all restaurant cards
const Body = () => {


  
  const[searchText, setSearchText]= useState("");
  // required array object 
    const card0 = restaurantsList.map((obj) => {
      const allRest = obj.info;
      return allRest;
    });

  // const [restaurants, setReastaurants] = useState(card0);
  //ALL RESTAURANTS DATA 
  const [restaurants, setReastaurants] = useState([]);
  // RESTAURANTS DATA THAT WILL BE DISPLAYED IN UI
  const[copyRestData, setCopyRestData]=useState([]);
  const [errorMessage, setErrorMessage] = useState("");


// useEffect(() => {
  //   console.log("useeffect");
  // }, [searchText]);  
  // console.log("before");

  //CALL API HERE AND BUILD SEARCH FUNCTIONALITY
  useEffect(() => {
    console.log("inside of effect hook");
    //call fx to call Api
    getRestaurants();
  }, []);

  async function getRestaurants() {

    //error handling is important 
    try {

      // swiggy_api_URL;
    // const response = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0803885&lng=72.8468571&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // )
    const response = await fetch(swiggy_api_URL );
    const resJson = await response.json();
    console.log("get restaurant fx", resJson);
    console.log(
      "json wa   >>   ",
      resJson?.data?.cards[5]?.card?.card?.gridElements
    );

    //HAVE TO CHANGE THIS EVERYTIME BASED ON API KA RESPONSE
  var checkdata =resJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants;
  
  console.log("checkk   ", checkdata);
    if(checkdata)
    {

      console.log("1234678");
      const newArray = checkdata;
    console.log("newarray ", newArray);
    const objv2  = newArray?.map((rest)=> {
      console.log(">>>>>>>>>>", rest.info);
      return rest?.info
    })
    // setReastaurants((Prev)=> [...Prev, ...newArray])
    setReastaurants([...objv2]);
    setCopyRestData([...objv2]);
    }

    }
    catch (error) {
      console.log("error", error);
    }
  
  }




  
    // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterList(searchText, restaurants);
      setCopyRestData(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setCopyRestData(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!restaurants) return null;
  

    // console.log("card  0 n", card0);
  
    return (
      <>
        {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
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
            // onClick={() => {
            //   // filter the data
            //   const data = filterList(searchText, restaurants);
            //   // update the state of restaurants list
            //   // setReastaurants(data);
            //   setCopyRestData(data);
            // }}

            onClick={() => {
              // user click on button searchData function is called
              searchData(searchText, restaurants);
            }}
          >
            Search
          </button>
        </div>
        {errorMessage && <div className="error-container">{errorMessage}</div>}
        {restaurants.length > 0 ? (
          <>
            <div className="Body">
              {/* <RestaurantCard {...card0}  /> */}

              <div className="restaurant-list">
                {/* {console.log("first rest", restaurants)} */}
                {/* debugger; */}

                {/* {restaurants?.map((restaurant) => { */}
                {copyRestData?.map((restaurant) => {
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
        ) : (
          <Shimmer />
        )}
      </>
    );
  };

  export default Body ;
