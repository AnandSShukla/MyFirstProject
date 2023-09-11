// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React from "react";
import { createRoot } from "react-dom/client";
import {HeaderComponent} from "./src/components/Header";
import Body from "./src/components/Body";
import {Footer} from "./src/components/Footer";
// import "./FoodVilla.css";
import ReactDOM from "react-dom/client";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
