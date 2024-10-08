import { createSlice } from "@reduxjs/toolkit";

// Define the initial state, which is an object containing an empty `items` array.

export const cartSlice = createSlice({
    name: 'addtoCart',
    initialState : [],  // Use the object defined above as the initial state
    reducers: {
        addItem: (state, action) => {
            // Since `state.items` is an array, we can push to it directly
            state.push(action.payload);   
        },
    },
});

// Export the action created by `createSlice`
export const { addItem } = cartSlice.actions;

// Export the reducer to be used in your store
export default cartSlice.reducer;
