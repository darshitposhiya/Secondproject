import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './PostSlice';
import WhishListReducer from './WhishListSlice';

export const Store = configureStore({
    reducer:{
        post:PostReducer,
        whishlist:WhishListReducer,
    },
});