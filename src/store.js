// Import necessary functions and reducers
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx'; // Make sure this path matches your folder structure

// Create the Redux store
const store = configureStore({
  reducer: {
    // 'cart' is the name of the slice of state managed by cartReducer
    cart: cartReducer,
  },
});

// Export the store so it can be used in <Provider store={store}>
export default store;
