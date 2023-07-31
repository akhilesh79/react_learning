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

import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
