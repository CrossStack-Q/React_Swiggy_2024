import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';





function RestaurantMenu() {
  const {id}=useParams();

  const [menuData, setMenuData] = useState({});
  const [menuCousines, setMenuCousines] = useState([]);


  async function getMenu() {
    const Menu_URL="https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6295233&lng=77.3123396&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
    const data = await fetch( Menu_URL, {
        headers: {
            'x-cors-api-key': 'temp_aed8b58531dda8c3b5158b1e4016365f'
        }
    });
    const json = await data.json();
    setMenuData(json.data.cards[0].card.card.info);
    setMenuCousines(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
  }

  useEffect(() => {
    
   getMenu();
   
  }, [])

  


 
  
  

  return (
    <div>
      <p>
        {menuData.name}
      </p>
      <img width={120} height={120} src={`${IMG_CDN_URL}${menuData.cloudinaryImageId}`} alt="" />
      <p>
        {menuData.city}
      </p>


      <div>
      {
                        menuCousines?.map(menuItem => {
                          return (
                            <div>
                              {menuItem.card.info.name}
                              <img width={80} height={80} src={`${IMG_CDN_URL}${menuItem.card.info.imageId}`} alt="" />
                              </div>
                          )
                        })}
      </div>
    </div>
  )
}

export default RestaurantMenu