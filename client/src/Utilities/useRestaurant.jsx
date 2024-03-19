import { useEffect, useState } from "react"
const userestaurantMenu = (resid) => {
    const[resinfo,setresinfo] = useState(null)
    const fetchdata = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const res = await data.json()
        setresinfo(res?.data)
    }
    useEffect(() => {
        fetchdata()
    }, [])

    return resinfo
}
export default userestaurantMenu