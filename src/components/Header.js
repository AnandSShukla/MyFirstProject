//  <HeaderComponent /> starts here

import { useState } from "react";
import logo from "../assests/img/logoFoodVilla.jpeg";
import { Link } from "react-router-dom";

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

function authicateUser() {
  return true;
}
//a different way of giving css
const styleObj = { backgroundColor: "red", fontSize: "18px" };
// const NameOfRest = "FOOD VILLA";
//Nav links in Right
export const HeaderComponent = () => {
  const [isLogged, setIslogged] = useState(false);
  return (
    <div className="header">
      <Title />
      {/* <h4>{NameOfRest}</h4> */}

      <div className="nav-items">
        <ul>
          {/* see this , this way we can give the inline css  */}
          {/* <li style={{ backgroundColor: "red", fontSize: "18px" }}>Logo</li> */}
          {/* <li style={styleObj}>Logo</li> */}

          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>

          <Link to="/about">
            {" "}
            <li>About</li>
          </Link>
          {/* <li>Logo</li> */}
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>

          <li>
            {" "}
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
                className="logout-btn"
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
                className="login-btn"
              >
                LogIn{" "}
              </button>
            )}
          </li>

          {/* <li>Cart </li> */}
        </ul>
      </div>
    </div>
  );
};
//  <HeaderComponent /> ends here

// export default HeaderComponent;
