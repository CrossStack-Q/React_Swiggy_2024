import { useState, useEffect } from "react";
import { restrautList } from "../config"
import Card from "./Card"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData1(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.info.name?.toLowerCase().includes(searchText)
    )
    return filterData;
}



function Body() {
    const [searchText, setSearchText] = useState("");
    const [AllRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    console.log("Body Render")

    useEffect(() => {
        // API Call
        getRestaurants();
    }, [])


    async function getRestaurants() {
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6295233&lng=77.3123396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
            headers: {
                'x-cors-api-key': 'temp_aed8b58531dda8c3b5158b1e4016365f'
            }
        });
        const json = await data.json();
        const actualData= (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(actualData)
        setFilteredRestaurants(actualData)
        console.log(actualData);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(!AllRestaurants) return null;







    return AllRestaurants.length === 0 ? (<Shimmer />) : (
        <>

            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" name="" id="" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                    const data = filterData1(searchText.toLowerCase(), AllRestaurants);

                    setFilteredRestaurants(data);

                }} >
                    Search
                </button>
            </div>
            {filteredRestaurants?.length === 0 ? <h1>No Item Found</h1> : (
                <div className="cardContainer">
                    {
                        filteredRestaurants?.map(restaurant => {
                            return (
                                <Link to={"/restaurant/"+restaurant.info.id}>
                                <Card {...restaurant.info} key={restaurant.info.id} />
                                </Link>
                            )
                        })
                    }
                </div>
            )}

        </>
    )
}

export default Body