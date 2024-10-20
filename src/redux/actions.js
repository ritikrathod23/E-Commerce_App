import { createSlice } from "@reduxjs/toolkit";

// Get the initial cart data from localStorage
const getInitialCart = () => {
    const storedCart = localStorage.getItem("cart");
    console.log("storedCart", storedCart);
    return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = getInitialCart();

export const cartSlice = createSlice({
    name: 'cartItems', // Unique name for the slice
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        deleteItem: (state, action) => {
            const index = state.find(item => item.pid === action.payload.pid);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(state));
            }
        },
    },
});

// Export the actions and reducer
export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
