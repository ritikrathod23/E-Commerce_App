import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './actions'

// Create the store without using 'new'
const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default store;
