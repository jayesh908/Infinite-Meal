import { useDispatch } from "react-redux"
import { CDN_URL } from "../Utilities/constant"
import { additem } from "../Utilities/CreateSlice"
const Itemlist = ({item}) => {

    const dispatch = useDispatch()
    const handleadditem = (name)=>{
        //dispatch an action
        dispatch(additem(name))
    }
    return (
        <div>
            <div>
                {item.map((ite) => (
                    <div key={ite.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex">
                        <div className="w-3/12">
                            <img src={CDN_URL + ite.card.info.imageId} className="w-20 h-auto">
                            </img>
                            <button className="bg-black text-white p-2 rounded-lg" onClick={()=>{handleadditem(ite)}}>Add+</button>
                        </div>
                        <div>
                            <div className="py-2 w-9/12">
                                <span>{ite.card.info.name}</span>
                                <span>{ite.card.info.price / 100}</span>
                            </div>
                            <p className="text-sm">{ite.card.info.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Itemlist