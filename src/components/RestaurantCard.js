import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../../constants";
import "../../FoodVilla.css";
export const RestaurantCard = (
  { cloudinaryImageId, name, cuisines, areaName, avgRating, sla, costForTwo },
  props
) => {
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
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} /> */}

        <h3>{name}</h3>
        <h5>{cuisines?.slice(1, 3).join(", ")}</h5>
        <h5>{areaName}</h5>

        <span>
          <h4
            style={
              avgRating < 4
                ? { backgroundColor: "var(--light-red)" }
                : avgRating === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }
          >
            {/* <i className="fa-solid fa-star"></i> */}
            <FontAwesomeIcon
              icon={faStar}
              className="fa-solid fa-star"
              // size="xs"
            />
            {avgRating}

            {/* <FontAwesomeIcon
              icon={faStar}
              className="fa-star"
              // size="xs"
            />
            {avgRating} */}
          </h4>
          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </span>
      </div>
    </>
  );
};



  export default RestaurantCard;
  