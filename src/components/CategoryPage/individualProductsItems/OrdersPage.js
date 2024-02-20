import React, { useEffect, useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import "../individualProductsItems/OrdersPage.css"
import "../individualProductsItems/OrdersPageResponsive.css"
import { Link } from "react-router-dom";

function OrdersPage({ clearAllCartItems, cartItems, totalPrice, incOrDecCartItemQuantity, removeItemFromCart }) {

    const [showClearAllButton, setShowClearAllButton] = useState(false);

    useEffect(() => {
        console.log(incOrDecCartItemQuantity);
        console.log(cartItems);
    }, [cartItems])

    useEffect(() => {
        if (cartItems.length === 0) {
            setShowClearAllButton(false);
        } else {
            setShowClearAllButton(true);

        }
    })

    return (

        <div className="orders-page">

            {
                cartItems.length > 0 ? <div>
                    {
                        showClearAllButton &&
                        <div className="clear-all-button-div">
                            <button className="clear-all-button" onClick={clearAllCartItems}> Clear all</button>
                        </div>
                    }
                    {
                        cartItems.map((val) => {
                            return (
                                <div className="cart-items-container">
                                    <div className="cart-items-div">

                                        <div className="cart-items-image-content-div">
                                            <img src={val.imageUrl} />
                                            <div>
                                                <h4>{val.product}</h4>
                                                <p>Price ₹ {val.price}</p>
                                            </div>
                                        </div>

                                        <div className="cart-items-button-container">

                                            <button onClick={() => { incOrDecCartItemQuantity(val, +1) }}>+</button>
                                            <p>{val.currentQuantity}</p>
                                            <button onClick={() => { incOrDecCartItemQuantity(val, -1) }}>-</button>
                                            <DeleteOutlineIcon className="delete-cart-item-icon" onClick={() => { removeItemFromCart(val) }} />

                                        </div>

                                    </div>


                                </div>
                            )
                        })
                    }
                    <div className="cart-underline-parent-div">
                        <div className="cart-underline-div"></div>
                    </div>

                    <div className="total-price-button-container">

                        <h3 className="products-total-price">Total Price : {totalPrice}</h3>
                        <button className="buy-button">Purchase Order</button>

                    </div>
                </div>
                    :
                    <div className="cart-empty-div">
                        <p>Your Cart Is Empty Please Go Back to Orders <Link className="cart-empty-home-link" to="/">Go back</Link> </p>
                    </div>
            }


        </div>
    )

}

export default OrdersPage;