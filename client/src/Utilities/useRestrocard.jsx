import { useEffect, useState } from "react"

const useRestaurandCard = ()=>{
    const[rescard,setrescard] = useState([])

    const fetchdata = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_W")
        const json = await data.json()
        setrescard(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
    }
        useEffect(()=>{
            fetchdata()
        },[])

    return rescard
}

export default useRestaurandCard