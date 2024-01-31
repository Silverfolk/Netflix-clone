import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
export default configureStore({
    reducer:{
       authReducer:userSlice,
       movieReducer:movieSlice
    }
})