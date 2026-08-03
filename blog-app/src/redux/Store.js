import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./BlogSlice";

// Yaha se pura redux store create hota hai

export const store = configureStore({

    reducer:{

        blog:blogReducer

    }

});