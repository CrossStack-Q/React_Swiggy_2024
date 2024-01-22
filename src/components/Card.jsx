import {IMG_CDN_URL} from "../config";

const Card = ( {name,cuisines,sla , cloudinaryImageId }) => (
    <div className="card">
        <img className="cardImage" src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="" />
        <p>{name}</p>
        <p>{cuisines.join(",")}</p>
        <p>{sla?.lastMileTravelString}</p>
    </div>

)

export default Card;