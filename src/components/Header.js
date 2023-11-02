//  <HeaderComponent /> starts here

import { useState, useEffect } from "react";
import logo from "../assests/img/logoFoodVilla.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useOnline from "../Hooks/useOnline";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
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
  //offload this logic of checking login status to a custom hook
  // const [isLogged, setIslogged] = useState(false);
  const [isLogged, setIsLogged] = useAuth();
  const isOnline = useOnline();
  const navigate = useNavigate();
  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
  useEffect(() => {
    // if value of getLocalStorage is equal to null setIsLoggedin to false
    if (getLocalStorage === null) {
      setIsLogged(false);
    }
  }, [getLocalStorage]);
  return (
    <div className="header">
      <Title />
      {/* if user is logged in then display userName */}
      {isLogged && (
        <div className="user-name">Hi {getLocalStorage?.userName}!</div>
      )}
      {/* <h4>{NameOfRest}</h4> */}

      <div className="nav-items">
        <ul>
          {/* see this , this way we can give the inline css  */}
          {/* <li style={{ backgroundColor: "red", fontSize: "18px" }}>Logo</li> */}
          {/* <li style={styleObj}>Logo</li> */}
          <li>
            <Link to="/">Home </Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          {/* <li>Logo</li> */}{" "}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">InstaGrocery</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} />{" "}
          </li>
          <li>
            {" "}
            {isOnline ? "🟢" : "🔴"}
            {isLogged ? (
              <button
                // onClick={() => setIslogged(false)}
                onClick={() => {
                  clearLocalStorage();
                  setIsLogged(false);
                }}
                // style={{
                //   width: "100px",
                //   height: "50px",
                //   borderRadius: "13%",
                //   background: "orangered",
                //   color: "moccasin",
                // }}
                className="logout-btn"
              >
                Logout{" "}
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                // onClick={() => setIslogged(true)}
                // style={{
                //   width: "100px",
                //   height: "50px",
                //   borderRadius: "13%",
                //   color: "black",
                //   background: "white",
                // }}
                className="login-btn"
              >
                LogIn{" "}
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
//  <HeaderComponent /> ends here

// export default HeaderComponent;
