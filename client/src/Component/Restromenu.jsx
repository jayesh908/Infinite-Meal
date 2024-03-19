import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import userestaurantMenu from '../Utilities/useRestaurant'
import Rescategory from './Rescategory'
import { useState } from 'react'
const Restromenu = () => {
    const { resid } = useParams()
    const resname = userestaurantMenu(resid)

    const[expand,setexpand] = useState(null)
    if (resname === null) return <Shimmer />
    const {
        name,
        cuisines,
       } = resname?.cards[0]?.card?.card?.info
       
        const categories =
        resname?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        );   

        return (
        <>  
            <div className='menu text-center'>
                <h1 className='font-bold text-3xl my-6'>{name}</h1>
                <p className='text-2xl font-bold'>{cuisines.join(",")}</p>
               {categories.map((rescat,index)=>
               <Rescategory showItem={index===expand && true}
                key={rescat?.card?.card?.title}
                 rescat = {rescat?.card?.card}
                setexpand={()=>{setexpand(index)}}
                  />)
                }
            </div>
            <div>
            </div>

        </>
    )
}

export default Restromenu
