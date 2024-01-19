import { useState } from "react";
import { restrautList } from "../config"
import Card from "./Card"


function filterData1(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.info.name.includes(searchText)
    )
    return filterData;
}
function Body() {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restrautList);




    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" name="" id="" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                    const data = filterData1(searchText, restaurants);
                    if(searchText==""){
                        setRestaurants(restrautList);
                    }else{
                    setRestaurants(data);
                    }
                }} >
                    Search
                </button>
            </div>
            <div className="cardContainer">
                {
                    restaurants?.map(restaurant => {
                        return (
                            <Card {...restaurant.info} key={restaurant.info.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body