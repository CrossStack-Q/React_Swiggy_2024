import { useEffect, useState } from "react"
import { Menu_URL } from "./constant";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);
    const [menuCousines, setMenuCousines] = useState([]);


    // fetchData

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        
        const data = await fetch(Menu_URL(resId), {
            headers: {
                'x-cors-api-key': 'temp_aed8b58531dda8c3b5158b1e4016365f'
            }
        });

        const json = await data.json();
        
        setResInfo(json.data.cards[0].card.card.info);
        setMenuCousines(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    }


    return {resInfo,menuCousines};
};

export default useRestaurantMenu;