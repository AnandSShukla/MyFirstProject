// we are not using this file just kept here for reference for making notes 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use
import { Link, Outlet } from "react-router-dom";
// import Profile from "./Profile";
import Profile from "./Profile";
import ProfileClassComp from "./ProfileClass";
import { useState } from "react";
import logoImage from "../assests/img/logoFoodVilla.jpeg";

const AboutFunctional = () => {

    const [show, setShow] = useState(false);

  console.log("functional about parent ");
  return (
    <>
      <div
        style={{
          margin: "100px 40px 20px",
          display: "flex",
          // , height: "80vh"
        }}
        className="about-profile-container"
      >
        {/* <FontAwesomeIcon
          icon={faStar}
          size="2xl"
        />
        <h1>ABOUT US PAGE </h1> */}

        {show ? (
          <>
            <Link to="/about">
              <button
                className="about-profile-button"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div>
        {/* Childrens are always rendered inside an Outlet. 
        Outlet Should always be created in Parent.  */}
        {/* <Outlet/> */}

        {/* or just place the child directly  , but child will bw always there even at the parents url and children url both */}
        {/* we sent props successfully to the functional Profile Child , now no need of it so commenting it  */}
        {/* <Profile
          name="ANAND SHUKLA"
          xyz="xyz"
        /> */}

        {/* similarly we can pass props to the class based components also */}
        {/* <ProfileClassComp
          name="ANAND SHUKLA"
          xyz="xyz"
        /> */}

        <div className="about-container">
          <div className="about-left">
            <h1>
              Welcome to <br /> The world of <br />{" "}
              <span>Tasty & Fresh Food</span>
            </h1>
            <h4>
              "Better you will feel if you eat a Food<span>Fire</span> healthy
              meal"
            </h4>
          </div>
          <div className="about-right">
            <img
              src={logoImage}
              alt="Food Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutFunctional;
