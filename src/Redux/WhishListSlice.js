import { createSlice } from "@reduxjs/toolkit";

export const WhishListSlice = createSlice({
    name:'wishlist',
    initialState:{
        data:[]
    },
    reducers:{
        addToWhishList(state,action){
            state.data.push(action.payload)
        },
    },
});

export const {addToWhishList} = WhishListSlice.actions;
export default WhishListSlice.reducer;