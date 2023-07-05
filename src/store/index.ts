import {configureStore} from '@reduxjs/toolkit';
import shopSliceReducer from './shop-slice';

const store = configureStore({
    reducer:{
        shop: shopSliceReducer
    }
})

export default store;