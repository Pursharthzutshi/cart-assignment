import React, { useEffect, useState } from "react";
import CategoryPageData from "../CategoryPageData"
import { Rating } from "@mui/material";
import { FacebookOutlined } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";


import "../individualProductsItems/IndividualProductsItems.css"
import "../individualProductsItems/IndividualProductsItemsResponsive.css"

function IndividualProductsItems({ itemAddedMessage, setItemAddedMessage, individualCategoryValue, addItemToCart, cartItems, alreadyInCartMessage }) {


    useEffect(() => {
        window.localStorage.setItem("individualCategoryValue", JSON.stringify(individualCategoryValue));
    }, [individualCategoryValue])


    return (
        <div className="individual-product-items-container">


            {
                CategoryPageData.filter((val) => {

                    return val.id == individualCategoryValue

                }).map((val) => {

                    return (
                        <div className="indiviual-product-item-image-content-parent-div">

                            <div>
                                <img className="indiviual-product-item-image" src={val.imageUrl} />
                            </div>

                            <div className="indiviual-product-item-content-div">

                                <h3>{val.brand}</h3>
                                <p>{val.product}</p>
                                <p>Price : ₹{val.price}</p>
                                <p>{val.desc}</p>
                                <p>Country of origin : {val.countryOrigin}</p>
                                <p>Rating:</p>
                                <Rating name="simple-controlled" value={val.rating} />
                                <p>Share-:</p>

                                <div className="share-icon-div">
                                    <WhatsApp style={{ color: '#008000' }} />
                                    <Instagram style={{ color: '#cd486b' }} />
                                    <FacebookOutlined style={{ color: '#316FF6' }} />
                                </div>

                                <div className="indiviual-product-item-button-container">

                                    <button onClick={() => { addItemToCart(val) }} className="add-item-to-cart-button">Add Item To Cart</button>

                                    {
                                        alreadyInCartMessage ? <h3 className="item-already-added-message">Item is already added</h3> : null
                                    }
                                    {
                                        itemAddedMessage ? <h3 className="item-added-message">Item is added in the cart</h3> : null
                                    }
                                </div>

                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default IndividualProductsItems;