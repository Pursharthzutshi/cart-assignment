import React, { useEffect, useState } from "react";
import CategoryPageData from "./CategoryPageData";
import { Link } from "react-router-dom";

import "./CategoryPage.css"
import "./CategoryPageResponsive.css"

function CategoryPage({ categoryValue, setIndividualCategoryValue }) {

    const [priceRange, setPriceRange] = useState(0);
    const [searchBar, setSearchBar] = useState("");


    useEffect(() => {
        window.localStorage.setItem("categoryValue", JSON.stringify(categoryValue));
    }, [categoryValue])



    return (
        <div>

            <div className="categories-filter-products-parent-container">
                <form>
                    {/* Search Bar Filter */}

                    <div>
                        <h4>Search Product </h4>
                        <input className="products-search-bar" onChange={(e) => { setSearchBar(e.target.value) }} placeholder="Search Brand Name" type="search" />
                    </div>

                    {/* Price Range Filter */}

                    <h4> Price Range </h4>
                    <div>
                        <input name="price" value={1000} onChange={(e) => { setPriceRange(e.target.value) }} type="radio" />
                        <label>₹1000 & above</label>
                    </div>
                    <div>
                        <input name="price" value={5000} onChange={(e) => { setPriceRange(e.target.value) }} type="radio" />
                        <label>₹5000 & above</label>
                    </div>
                    <div>
                        <input name="price" value={10000} onChange={(e) => { setPriceRange(e.target.value) }} type="radio" />
                        <label>₹10000 & above</label>
                    </div>
                    <div>
                        <input name="price" value={15000} onChange={(e) => { setPriceRange(e.target.value) }} type="radio" />
                        <label>₹15000 & above</label>
                    </div>
                    <div>
                        <input name="price" value={30000} onChange={(e) => { setPriceRange(e.target.value) }} type="radio" />
                        <label>₹30000 & above</label>
                    </div>
                    <div>
                        <input name="price" value={60000} onChange={(e) => { setPriceRange(e.target.value) }} type="radio" />
                        <label>₹60000 & above</label>
                    </div>

                </form>

                <div className="parent-products-div">
                    {
                        CategoryPageData.filter((val) => {

                            return val.category.toLowerCase().includes(categoryValue.toLowerCase())

                        }).filter((val) => {
                            if (val.price >= priceRange) {
                                return val
                            }
                        }).filter((val) => {
                            return val.brand.toLowerCase().includes(searchBar.toLowerCase())
                        }).map((val) => {
                            return (
                                <div className="products-div">
                                    <img className="image" src={val.imageUrl} />
                                    <h4>{val.brand}</h4>
                                    <h4>{val.product}</h4>
                                    <p>Price : ₹{val.price}</p>
                                    <Link className="category-button" to="/individualProductItems" onClick={() => setIndividualCategoryValue(val.id)}>View Product</Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default CategoryPage;