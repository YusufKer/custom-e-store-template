import React from "react"
import {Link} from "react-router-dom"
import "./navbar.css"

function Navbar(){
    const link_style={color:"black",textDecoration: "none"}
    //any values loaded into this array will act as links in the nav bar
    const nav_links=["one","two","three","four","five"]
    return(
        <div className="Navbar">
            <ul>
                {
                    nav_links.map(item => (
                        <Link 
                            style={link_style} 
                            to={`/${item}`}>
                            {item}
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar