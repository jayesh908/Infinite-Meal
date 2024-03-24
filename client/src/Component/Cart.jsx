import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist"
import { clearcart } from "../Utilities/CreateSlice"
const Cart = ()=>{
    const cart = useSelector((store)=>store.cart.item)
    const dispatch = useDispatch()
    const handleclearcart = ()=>{
        dispatch(clearcart())
    }
    return(
        <>
        <div className="text-center p-2 m-2">
        <h1 className="text-2xl font-bold">
        cart
            </h1>

            <Itemlist item={cart}/>
        </div>
        <div className="flex justify-center items-center">
        <button className="bg-black text-white p-5" onClick={handleclearcart}>Clear Cart</button>
        </div>
        </>
    )
}
export default Cart