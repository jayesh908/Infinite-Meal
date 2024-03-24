import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./CreateSlice"
const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default appStore