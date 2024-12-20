
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import productReducer from './slice/productSlice';
import filterReducer from './slice/filterSlice';
import cartReducer from './slice/cartSlice';
import checkoutReducer from './slice/checkoutSlice';
import orderReducer from "./slice/orderSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  filter: filterReducer,
  cart: cartReducer, // Include cart reducer here
  checkout: checkoutReducer, 
  orders: orderReducer,
});

const store = configureStore({
  reducer: rootReducer, // Use rootReducer
});


export default store;

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     products: productReducer,
//     filter: filterReducer,
//   },
// });

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import authReducer from './slice/authSlice';
// import productReducer from './slice/productSlice';
// import filterReducer from './slice/filterSlice';
// import cartReducer from "./slice/cartSlice";


// const rootReducer = combineReducers({
//   auth: authReducer,
//   Product: productReducer,
//   filter: filterReducer,
//   cart: cartReducer,
// });

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     products: productReducer,
//     filter: filterReducer,
//   },
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
// export default store;


// import {configureStore, combineReducers} from "@reduxjs/toolkit"

// const rootReducer = combineReducers()

// const store = configureStore({
//     reducer: rootReducer,
// })

// export default store;
