// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React from "react";
import { createRoot } from "react-dom/client";
import { HeaderComponent } from "./src/components/Header";
import Body from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import "./FoodVilla.css";
import ReactDOM from "react-dom/client";
import About from "./src/components/About";
import ErrorPage from "./src/components/ErrorPage";
import Contact from "./src/components/Contact"; 
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
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

      <Outlet/>
      {/* <Body /> */}
      {/* <Contact/> */}
      {/* <About/> */}

      <Footer />
    </React.Fragment>
  );
};

///ALWAYS PLACE BELOW OF THE APP LAYOUT

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element:<RestaurantMenu/>
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
