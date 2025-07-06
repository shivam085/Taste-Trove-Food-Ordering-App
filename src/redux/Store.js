import {configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice"
import CategrySlice from "./slices/CategorySlice"
import SearchSlice from "./slices/SearchSlice"


const Store =configureStore({
    reducer:{
        cart: CartSlice,
        category: CategrySlice,
        search: SearchSlice,
    }
})

export default Store