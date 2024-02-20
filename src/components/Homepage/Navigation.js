import React, { useEffect, useState } from "react";
import "./Navigation.css";
import "./NavigationResponsive.css"
import { Link, Navigate } from "react-router-dom";
import imageIcon from "../Homepage/images/ecommerce.png"

function Navigation() {

    const [redirectStatus, setRedirectStatus] = useState(false);

    function redirectToHomePage() {
        setRedirectStatus(true)
    }

    useEffect(() => {

        setTimeout(() => {
            setRedirectStatus(false);
        })
    })

    return (
        <nav>
            {
                redirectStatus && <Navigate to="/" />
            }

            <div onClick={() => redirectToHomePage()} className="nav-bar-icon-heading-row">
                <img className="nav-bar-icon-image" src={imageIcon} />
                <h3 ><span>Ecommerce</span> Website</h3>
            </div>
            <div>
                <Link className="category-button" to="/ordersPage">View Cart</Link>
            </div>


        </nav>
    )
}

export default Navigation;