import React from "react";
import "./Header.css"
import "./HeaderResponsive.css"

function Header({ setHeaderSearchBar }) {

    return (
        <header className="header">

            <h2>Shopping Categories</h2>
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin auctor felis quis elementum. </p>
            <input onChange={(e) => { setHeaderSearchBar(e.target.value) }} placeholder="Search Your Product" className="homepage-search-bar" type="search" />
        </header>
    )
}

export default Header;