import React from "react"
import {Link} from "react-router-dom"
import "./navbar.css"

function Navbar(){
    //some styling to remove the default css properties that come with react-router links
    const link_style = {color:"black",textDecoration: "none"}
    //any values loaded into this array will act as links in the nav bar
    //the array is an array of objects which will need a name property and a link property
    const nav_links = [{name:"one",link:""},{name:"two",link:"two"},{name:"three",link:"three"},{name:"four",link:"four"},{name:"five",link:"five"},]
    const nav_items = nav_links.map(item => (<Link style={link_style} to={`/${item.link}`}>{item.name}</Link>))
    return(
        <div className="Navbar">
            <ul>{nav_items}</ul>
        </div>
    )
}

export default Navbar