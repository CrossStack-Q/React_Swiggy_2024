import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';
import useRestaurantMenu from '../utils/useRestaurantMenu';






function RestaurantMenu() {
  const { id } = useParams();



  


  const {resInfo,menuCousines} = useRestaurantMenu(id);



  console.log(resInfo,"   ",menuCousines)








  return (
    <div>
      <p>
        {resInfo.name}
      </p>
      <img width={120} height={120} src={`${IMG_CDN_URL}${resInfo.cloudinaryImageId}`} alt="" />
      <p>
        {resInfo.city}
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