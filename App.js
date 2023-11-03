// ## Namaste React Course by Akshay Saini
// Chapter 09 - Optimizing our App
import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HeaderComponent } from "./src/components/Header";
import Body from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import "./FoodVilla.css";
import ReactDOM from "react-dom/client";
//we will lazy load this About Component
// import AboutFunctional from "./src/components/AboutFunctional";
import About from "./src/components/AboutCls";
import ErrorPage from "./src/components/ErrorPage";
import Contact from "./src/components/Contact";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/ProfileClass";
import ProfileFunctionalComp from "./src/components/Profile";
import Login from "./src/components/LogIn";
import Shimmer from "./src/components/Shimmer";

//lazy load, dynamic loaading, code splitting, code chunking, keep on top
const InstaGrocery = lazy(() => import("./src/components/InstaGrocery"));
const AboutFunctional = lazy(() => import("./src/components/AboutFunctional"));

//NOTES IMP
// import InstaGrocery from "./src/components/InstaGrocery";
// "./abx.js" means that you are looking for "abx.js" in the same directory
// "/abx.jx" means that you are looking for "abx.jx" at the root directory of the file system.
// "../abx.js" means that you are looking for "abx.js" in the parent directory (one level up) from the directory where the code file containing this path is located.
// // import Profile from "./src/components/Profile";
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

      <Outlet />
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
        // path: "about",
        path: "/about", //both will work because it's going to be append to URL only
        //parentPath/{Path} => http://localhost:1234/about
        // element: <About />, // "/" means from the root, root is localHost Applayout
        // element: <AboutFunctional />,
        element: (
          <Suspense
            fallback={
              <h1 style={{ margin: "100px", height: "100vh" }}>
                Wait A Second , we are getting things Ready for you{" "}
              </h1>
            }
          >
            <AboutFunctional />
          </Suspense>
        ),
        children: [
          {
            path: "profile", //here don't use / to subChild otherwise it will get appended to http://localhost:1234/profile like this but we want http://localhost:1234/about/profile
            // element: <Profile />,
            element: <Profile />,
          },
          {
            path: "profileFx", //here don't use / to subChild otherwise it will get appended to http://localhost:1234/profile like this but we want http://localhost:1234/about/profile
            // element: <Profile />,
            element: <ProfileFunctionalComp />,
          },
        ],
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaGrocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      //keeping it out of children because there header and footer will be always displayed , but that we do not want
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },

  //App layout ke bahar karne se ab header aur footer hat jayega 
  {
    path: "login",
    element: <Login />,
  },

  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
