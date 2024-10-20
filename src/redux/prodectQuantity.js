// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// export const productQuantity = createSlice({
//     name: 'productQuantity',
//     initialState,
//     reducers: {
//         addQuantity: (state, action) => {
//             const exist = state.find(item => item.pid === action.payload.pid);
//             if (exist) {
//                 // Update the quantity of the existing item
//                 exist.quantity += 1;
//             } else {
//                 // Add a new item to the cart with an initial quantity of 1
//                 state.push({ ...action.payload, quantity: 1 });
//             }
//             // Save the updated state to localStorage
//             localStorage.setItem("cart", JSON.stringify(state));
//         },
//         removeQuantity: (state, action) => {
//             const index = state.findIndex(item => item.pid === action.payload.pid);
//             if (index !== -1) {
//                 if (state[index].quantity > 1) {
//                     state[index].quantity -= 1;
//                 } else {
//                     // Remove the item if quantity reaches zero
//                     state.splice(index, 1);
//                 }
//             }
//             localStorage.setItem("cart", JSON.stringify(state));
//         },
//     },
// });

// export const { addQuantity, removeQuantity } = productQuantity.actions;
// export default productQuantity.reducer;
