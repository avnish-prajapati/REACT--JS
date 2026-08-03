import { createSlice } from "@reduxjs/toolkit";

// Starting Data

const initialState={

    blogs:[]

}

const blogSlice=createSlice({

    name:"blog",

    initialState,

    reducers:{

        // New Blog Add

        addBlog:(state,action)=>{

            state.blogs.push(action.payload)

        },

        // Delete Blog

        deleteBlog:(state,action)=>{

            state.blogs=state.blogs.filter((item)=>item.id!==action.payload)

        },

        // Update Blog

        updateBlog:(state,action)=>{

            const index=state.blogs.findIndex(

                (item)=>item.id===action.payload.id

            )

            if(index!==-1){

                state.blogs[index]=action.payload

            }

        }

    }

})

export const{

addBlog,
deleteBlog,
updateBlog

}=blogSlice.actions

export default blogSlice.reducer