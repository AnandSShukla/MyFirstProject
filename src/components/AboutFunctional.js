import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use
import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import Profile from "./Profile";
import ProfileClassComp from "./ProfileClass";

const AboutFunctional = () => {
  console.log("functional about parent ");
  return (
    <>
      <div
        style={{
          margin: "100px 40px 20px",
          display: "flex",
          // , height: "80vh"
        }}
      >
        {/* <FontAwesomeIcon
          icon={faStar}
          //   style={{ color: "blue" }}
        />
        <FontAwesomeIcon
          icon={faStar}
          size="2xs"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="xs"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faStar}
          size="xl"
        /> */}
        <FontAwesomeIcon
          icon={faStar}
          size="2xl"
        />
        <h1>ABOUT US PAGE </h1>
      </div>
      <div>
        {/* Childrens are always rendered inside an Outlet. 
        Outlet Should always be created in Parent.  */}
        {/* <Outlet/> */}

        {/* or just place the child directly  , but child will bw always there even at the parents url and children url both */}
        <Profile
          name="ANAND SHUKLA"
          xyz="xyz"
        />
        <ProfileClassComp
          name="ANAND SHUKLA"
          xyz="xyz"
        />
      </div>
    </>
  );
};
export default AboutFunctional;
