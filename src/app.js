/* Bundler in react is basically a tool which allows a developers their code into a single file or bundle which will be
   elligible to ship it to production 
   there are total 3 types of bundler , webpack , parcel , beet

   Webpack in react is a JavaScript module bundler that is commonly used with React to bundle and manage dependencies.
   It takes all of the individual JavaScript files and other assets in a project, such as images and CSS,
   and combines them into a single bundle that can be loaded by the browser.
*/
/* react.createElement - its return react element which is basically object.
   react element is kind of DOM element but its not a html elements, its basically a object and that object will be render by render
   method
*/

// render method takes a object and convert into h1 tag and put it into DOM

/* JSX stands for javascript syntax which is kind of html-link syntax , which actually helps to create the htmls elements otherwise
   using react it would ve very combursome experience.

   this JSX is totally different from react . it is used only for creating react element in the end and this where babel comes.
   babel is  js library which is used transpiled jsx syntax to react code so that render method will easily able to render this.

   any attribute inside jsx syntax should be written in camelCase form.
 */

//Component Composition -  using component inside component

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginUser from "./components/LoginUser";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

/*
To creates routes , we should do first routing configurations in our app.js file
steps to create configurationa and provide that to our app so that it can be reflected
1. import createBrowserRouter and Router provider from react-router dom library.
2. createBrowserRouter will be used to create routing configuration - means an information to browser router that what will happen 
when we update to some url.
3. using router provider we provite this configuration to our app.
4. in order to a create a children routes , we can pass all children routes inside children key.
5. one functionality is given by react router dom is Outlet , its just a tunnel which will get automatically replaced as per the 
path given in the url
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <LoginUser />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
