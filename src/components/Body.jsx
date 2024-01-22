import { useState , useEffect } from "react";
import { restrautList } from "../config"
import Card from "./Card"
import Shimmer from "./Shimmer";


function filterData1(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.info.name?.toLowerCase().includes(searchText)
    )
    return filterData;
}



function Body() {
    const [searchText, setSearchText] = useState("");
    const [AllRestaurants, setAllRestaurants] = useState(restrautList);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restrautList);
    
    console.log("Body Render")

    // useEffect(()=>{
    //     // API Call
    //     getRestaurants();
    // },[])


    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4636976&lng=77.3338783&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards)
        setFilteredRestaurants(json?.data?.cards)
        console.log(json )
    }

    // if(!AllRestaurants) return null;


    

    


    return AllRestaurants.length===0 ? (<Shimmer/>) :(
        <>

            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" name="" id="" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                    const data = filterData1(searchText.toLowerCase(), AllRestaurants);
                    
                    setFilteredRestaurants (data);
                    
                }} >
                    Search
                </button>
            </div>
            {filteredRestaurants?.length===0 ? <h1>No Item Found</h1> : (
                <div className="cardContainer">
                {
                    filteredRestaurants?.map(restaurant => {
                        return (
                            <Card {...restaurant.info} key={restaurant.info.id} />
                        )
                    })
                }
            </div>
            ) }
            
        </>
    )
}

export default Body