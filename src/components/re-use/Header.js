import React from "react"
import "./header.css"

function Header(){
    return(
        <div className="Header">
            <img alt="logo"/>
            <div className="header-right">
                <input className="header-font" type="text" placeholder="search"/>
                <button className="header-font">Search</button>
            </div>
        </div>
    )
}

export default Header