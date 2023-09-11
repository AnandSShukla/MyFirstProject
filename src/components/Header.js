//  <HeaderComponent /> starts here
//made Title Component with the logo of our app
const Title = () => {
  return (
    <a href="/">
      {" "}
      <img
        src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0"
        alt="logo"
        className="logo"
      />
    </a>
  );
};
//a different way of giving css
const styleObj = { backgroundColor: "red", fontSize: "18px" };

//Nav links in Right
export const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />

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
    </div>
  );
};
//  <HeaderComponent /> ends here

// export default HeaderComponent;
