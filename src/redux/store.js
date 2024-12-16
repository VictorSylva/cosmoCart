
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import productReducer from './slice/productSlice';
import filterReducer from './slice/filterSlice';
import cartReducer from './slice/cartSlice';
import checkoutReducer from './slice/checkoutSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  filter: filterReducer,
  cart: cartReducer, // Include cart reducer here
  checkout: checkoutReducer, 
});

const store = configureStore({
  reducer: rootReducer, // Use rootReducer
});

export default store;


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
