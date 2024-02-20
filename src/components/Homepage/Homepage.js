import React from "react";
import Header from "./Header";
import HomepageProductCategories from "./HomepageProductCategories";

function Homepage({ headerSearchBar, setHeaderSearchBar, setCategoryValue }) {

    return (
        <div>

            <Header setHeaderSearchBar={setHeaderSearchBar} />
            <HomepageProductCategories setCategoryValue={setCategoryValue} headerSearchBar={headerSearchBar} />

        </div>
    )
}

export default Homepage;