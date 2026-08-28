//  while creating element with react its just js object with props
//  h1 is the element 
//  {} here we can attributes which are added in an element like id,class,src etc
//  third arg is the content or the child element which is to be added inside main element (which is to be created)
//if we want multiple child ele we can use an array also
//root.render will completely replace eveything if there is anything already 
//inside div ele with root id 

import React from "react";
//const React = require('react') this also work its sync in nature package is coming from node modules
import ReactDOM from "react-dom/client"
 
 const heading = React.createElement("h1",{},
    [React.createElement("span",{id:"ele1",key:"ele1"},"span inside h1"),
     React.createElement("span",{id:"ele2",key:"ele2"},"span2 inside h1")   
    ]
 )
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)