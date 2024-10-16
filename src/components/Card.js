import React from "react";
import { CDNURL } from "../utilis/CdnUrl";

const Card = ((props)=>{
    const {resdata} = props
    const {cloudinaryImageId, name, avgRating, costForTwo} = resdata.info
    return(
        <div className="card">
            <img src= {CDNURL + cloudinaryImageId }/>
            <h2>{name}</h2>
            <h3>Ratings {avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    )
})

export default Card