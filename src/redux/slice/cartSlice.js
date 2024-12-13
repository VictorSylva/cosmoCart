
// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems")) 
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const calculateTotals = (state) => {
    let { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;

            cartTotal.totalAmount += itemTotal;
            cartTotal.totalQuantity += cartQuantity;

            return cartTotal;
        },
        {
            totalAmount: 0,
            totalQuantity: 0,
        }
    );

    state.cartTotalAmount = totalAmount;
    state.cartTotalQuantity = totalQuantity;
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_TO_CART(state, action) {
            console.log(action.payload);
            const productIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (productIndex >= 0) {
                state.cartItems[productIndex].cartQuantity += 1;
                toast.info(`${action.payload.name} increased by one`, {
                    position: "top-left",
                });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} added to cart`, {
                    position: "top-left",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            calculateTotals(state);
        },
        DECREASE_CART(state, action) {
            const productIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[productIndex].cartQuantity > 1) {
                state.cartItems[productIndex].cartQuantity -= 1;
                toast.info(`${action.payload.name} decreased by one`, {
                    position: "top-left",
                });
            } else {
                const newCartItem = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = newCartItem;
                toast.success(`${action.payload.name} removed from cart`, {
                    position: "top-left",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            calculateTotals(state);
        },
        REMOVE_FROM_CART(state, action) {
            const newCartItem = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );

            state.cartItems = newCartItem;
            toast.success(`${action.payload.name} removed from cart`, {
                position: "top-left",
            });

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            calculateTotals(state);
        },
    },
});

export const { ADD_TO_CART, DECREASE_CART, REMOVE_FROM_CART } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;

export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify';

// const initialState = {
//     cartItems: localStorage.getItem("cartItems") 
//     ? JSON.parse(localStorage.getItem("cartItems")) 
//     : [],
//     cartTotalQuantity: 0,
//     cartTotalAmount: 0,
// }


// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     ADD_TO_CART(state,action) {
//         console.log(action.payload);
//         const productIndex = state.cartItems.findIndex((item) =>
//         item.id === action.payload.id)

//         if (productIndex >= 0) {
//             // item already exist in the cart
//             // inclreae the cartQuantity
//             state.cartItems[productIndex].cartQuantity += 1;
//             toast.info(`${action.payload.name} increased by one`,
//             {position: "top-left"
//             });
//         } else {
//             // item doesnt exist in the cart
//             // additem to the cart
//             const tempProduct = {...action.payload, 
//             cartQuantity: 1}
//             state.cartItems.push(tempProduct);
//             toast.success(`${action.payload.name} added to 
//             cart`,
//             {position: "top-left"
//             });

//         }
//         // save cart to Local Storage
//         localStorage.setItem("cartItems", JSON.stringify 
//         (state.cartItems));
//     },
//     DECREASE_CART(state, action) {
//         console.log(action.payload);
//         const productIndex = state.cartItems.findIndex((item) =>
//             item.id === action.payload.id);

//         if (state.cartItems[productIndex].cartQuantity > 1) {
//             state.cartItems[productIndex].cartQuantity -= 1
//             toast.info(`${action.payload.name} decrease by one`,
//                 {position: "top-left",
//                 });
//                 } else if (state.cartItems[productIndex].cartQuantity 
//                 === 1) {
//             const newCartItem = state.cartItems.filter((item) =>
//                  item.id !== action.payload.id);
//             state.cartItems = newCartItem 
//             toast.success(`${action.payload.name} removed from cart`,
//              {position: "top-left",
//             });
//         }

//         localStorage.setItem("cartItems", JSON.stringify 
//         (state.cartItems));
//     },
//     REMOVE_FROM_CART(state, action) {
//         const newCartItem = state.cartItems.filter((item) =>
//             item.id !== action.payload.id);

//         state.cartItems = newCartItem 
//             toast.success(`${action.payload.name} removed from cart`,
//              {position: "top-left",
//             });

//         localStorage.setItem("cartItems", JSON.stringify 
//             (state.cartItems));
//     }
//   },
// });

// export const {ADD_TO_CART, DECREASE_CART, REMOVE_FROM_CART} = cartSlice.actions;

// export const selectCartItems = (state) => state.cart.cartItems
// export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity
// export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;

// export default cartSlice.reducer