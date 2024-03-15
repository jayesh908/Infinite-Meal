import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
const Restromenu = () => {
    const [resname, setresname] = useState(null)
    const {resid} = useParams()
    const fetchdata = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const res = await data.json()
        setresname(res)
        console.log(res)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    if (resname === null) return <Shimmer />
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        id } = resname?.data?.cards[0]?.card?.card?.info

        const{itemCards} = resname?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        console.log(itemCards)
    return (

        <>
            <div className='menu'>
                <h1>{name}</h1>
                <h3>{cuisines.join(",")}</h3>
                <h3>{costForTwo}</h3>
                <h3>{avgRating}</h3>
                <h2>Menu</h2>
                <ul>
                {
                    itemCards.map((ele)=>{
                        return(<li key={ele?.card?.info?.id}>{ele?.card?.info?.name}</li>)
                    })
                }
                </ul>
            </div>
            <div>
               
            </div>

        </>
    )
}

export default Restromenu
