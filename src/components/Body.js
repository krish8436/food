import React, { useEffect } from "react"
import Card from "./Card"
import reslists from "../utilis/mockdata"
import { useState } from "react"



const Body = (()=>{
    
    let [listofrestarurent, setlistofrestarurent] = useState([])
    const [search, setsearch] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
    
 const fetchData = async ()=>{
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5735314&lng=88.4331189&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
    setlistofrestarurent(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
}


       return listofrestarurent.length === 0 ? <p>Loading</p> :(
        
        <div className="container">
            <div className="srch-srt">
            <div className="search-part">
                <input type="text" value={search}
                 onChange={
                    (e)=>{
                        setsearch(e.target.value)
                    }
                 }
                />
                <button>SEARCH</button>
            </div>
            <div className="short">
            <button className="filter-btn"
        onClick={() => { 
            listofrestarurent = listofrestarurent.filter((res)=>{
            return(
              res.info.avgRating > 4.6
            )
           
          }) 
          
          setlistofrestarurent(listofrestarurent)
        }} 
        >
           
              Top Rated Restaurents</button>
                </div>
                
            </div>
           
                
                   
              
           
            <div className="res-container">
                {/* <Card resdata = {reslists[0]}/> */}
               
               {
                listofrestarurent.map((res)=>{
                    return(
                        <Card key = {res.info.id}  resdata = {res}/>
                    )
                })
               }
            </div>
        </div>
        
    )
    
})

export default Body