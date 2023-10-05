//  <HeaderComponent /> starts here

import { useState } from "react";
import logo from "../assests/img/logoFoodVilla.jpeg";

//made Title Component with the logo of our app
const Title = () => {
  return (
    <a href="/">
      {" "}
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
    </a>
  );
};

function authicateUser(){
  return true;
}
//a different way of giving css
const styleObj = { backgroundColor: "red", fontSize: "18px" };
// const NameOfRest = "FOOD VILLA";
//Nav links in Right
export const HeaderComponent = () => {

  const[isLogged, setIslogged]=useState(false);
  return (
    <div className="header">
      <Title />
      {/* <h4>{NameOfRest}</h4> */}

      <div className="nav-items">
        <ul>
          {/* see this , this way we can give the inline css  */}
          {/* <li style={{ backgroundColor: "red", fontSize: "18px" }}>Logo</li> */}
          {/* <li style={styleObj}>Logo</li> */}
          <li>Logo</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact us </li>
          <li>Cart </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          height: "inherit",
          margin: "10px 10px 10px 0px",
        }}
      >
        {/* <button onClick={authicateUser}>Login </button> */}
        {/* {isLogged ? (
          <button onClick={setIslogged(false)}>Logout </button>
        ) : (
          <button onClick={setIslogged(authicateUser())}>Login </button>
        )} */}
        {isLogged ? (
          <button
            onClick={() => setIslogged(false)}
            style={{
              width: "100px",
              height: "50px",
              borderRadius: "13%",
              background: "orangered",
              color: "moccasin",
            }}
          >
            Logout{" "}
          </button>
        ) : (
          <button
            onClick={() => setIslogged(true)}
            style={{
              width: "100px",
              height: "50px",
              borderRadius: "13%",
              color: "black",
              background: "white",

            }}
          >
            LogIn{" "}
          </button>
        )}
      </div>
    </div>
  );
};
//  <HeaderComponent /> ends here

// export default HeaderComponent;
