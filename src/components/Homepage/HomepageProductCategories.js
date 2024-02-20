import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import productsCategoriesData from "./ProductsData";
import { Link } from "react-router-dom";

import { CancelOutlined } from "@mui/icons-material";

import "../Homepage/HomepageProductCategories.css";
import "../Homepage//HomepageProductCategoriesResponsive.css"


function HomepageProductCategories({ headerSearchBar, setCategoryValue }) {

    const [selectedId, setSelectedId] = useState(null);
    const [animation, setAnimation] = useState(false);

    function selectCategoryName(id) {
        setCategoryValue(id)
    }

    return (
        <div className="categories-section">

            <div>
                <h3 className="categories-parent-heading">View Products Categories</h3>
            </div>
            <div className="categories-parent-div">


                {
                    productsCategoriesData.filter((val) => {
                        return val.categories.toLowerCase().includes(headerSearchBar.toLowerCase())
                    }).map((val) => {


                        return (
                            <div>
                                <motion.div onClick={() => { setSelectedId(val.id) }} onLoad={() => { setAnimation(true) }} animate={{ opacity: animation ? 1 : 0 }} transition={{ duration: 1 }} initial={{ y: 50, opacity: .2 }} className="categories-div">
                                    <img className="categories-image" src={val.imageUrl} />
                                    <motion.h3>{val.categories}</motion.h3>
                                    <Link className="category-button" to="/CategoryPage" onClick={() => selectCategoryName(val.categories)}>View Product</Link>
                                </motion.div>
                                {

                                    selectedId && selectedId === val.id &&

                                    (
                                        <AnimatePresence>
                                            <motion.div animate={{ scale: 1.2, opacity: 1, backgroundColor: "white" }} transition={{ duration: .8 }} id="change-position-categories-div" className="categories-div">
                                                <CancelOutlined onClick={() => { setSelectedId(null) }} className="close-pop-up-icon" />
                                                <motion.img className="categories-image" src={val.imageUrl} />
                                                <motion.h3>{val.categories}</motion.h3>
                                                <Link className="category-button" to="/CategoryPage" onClick={() => selectCategoryName(val.categories)} >View Product</Link>
                                            </motion.div>
                                        </AnimatePresence>
                                    )

                                }
                            </div>
                        )
                    })
                }





            </div>
        </div>
    )
}

export default HomepageProductCategories