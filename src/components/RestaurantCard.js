import { IMG_CDN_URL } from "../../constants";
import "../../FoodVilla.css"
export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
}, props) => {
  // console.log("props", props);
  // console.log(cloudinaryImageId,
  //   name,
  //   cuisines,
  //   areaName,
  //   avgRating,);
  return (
    <>
      <div className="card">
      {/* <img class="sc-dcJsrY kMtDjj" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/w5a7iddslefygbqprjwe" alt="Meraki"> */}
        {/* <img src={IMG_CDN_URL + cloudinaryImageId} /> */}
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />

        <h3>{name}</h3>
        <h5>{areaName}</h5>
        <h5>{cuisines?.slice(1, 3).join(", ")}</h5>
        <span>
          {" "}
          <h4
            style={
              avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
            }
          >
            {/* <i className="fa-solid fa-star"></i> */}
            {avgRating}
          </h4>
        </span>
      </div>
    </>
  );
};



  export default RestaurantCard;
  