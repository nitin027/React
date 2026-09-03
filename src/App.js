//  while creating element with react its just js object with props
//  h1 is the element
//  {} here we can attributes which are added in an element like id,class,src etc
//  third arg is the content or the child element which is to be added inside main element (which is to be created)
//if we want multiple child ele we can use an array also
//root.render will completely replace eveything if there is anything already
//inside div ele with root id

import React from "react";
//const React = require('react') this also work its sync in nature package is coming from node modules
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//  const heading = React.createElement("h1",{},
//     [React.createElement("span",{id:"ele1",key:"ele1"},"span inside h1"),
//      React.createElement("span",{id:"ele2",key:"ele2"},"span2 inside h1")
//     ]
//  )

//JSX (transpiled before is reaches the js) - PARCEL - Babel transplies it

//JSX => React.createElement() => React Element - JS object => HTMLElement(render)

//React Element
const heading = (
  <h1 className="heading" tabIndex="1">
    Heading from h1 and jsx
  </h1>
);
let name = "Nitin";
console.log(heading); // js object

const Title = () => {
  return (
    <span id="title" style={{ display: "block" }}>
      from title function component
    </span>
  );
};

//React Functional component is a normal JS function which return jSX
const Component = () => {
  return (
    //jsx start
    <>
      <div id="container">
        {name} //writing javascript inside jsx
        <h2>Heading h2 from functional component</h2>
      </div>
      {name}
      <Title />
    </>
    //jsx end
     // this is not valid as heading is not inside jsx and jsx should be wrapped inside one parent element from a functional component
    //   {heading}
    //   <>
    //   <h2>heading h2</h2>
    //   </>
  );
};


const AppLayout = ()=>{
    return (
        <div id="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[  
    {
        path:'/',
        element:<Body />
    },        
    {
        path:'/aboutus',
        element:<AboutUs />
    },
    {
        path:"/contactus",
        element:<ContactUs />
    },
    {
        path:'/restaurant/:resId',
        element:<RestaurantMenu />
    }
    ],
        errorElement:<Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
