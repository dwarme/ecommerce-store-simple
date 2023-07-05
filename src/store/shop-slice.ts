import {createSlice} from '@reduxjs/toolkit';
import { SetCartAction, SetCustomerAction, SetProductAction, SetVariantColorSelectedAction, ShopSliceState } from '../types/redux/shop-slice';
import { calculateCartTotal } from '../utils/cart.util';

const initialState: ShopSliceState = {}
const shopSlice = createSlice({
    name: 'SHOP-SLICE/#7BEGET3GE',
    initialState,
    reducers:{
        setCustomer(state: ShopSliceState, action: SetCustomerAction){
            state.customer = action.payload.customer;
        },

        setCart(state: ShopSliceState, action: SetCartAction){
            let {cart} = action.payload;
            cart = calculateCartTotal(cart);
            state.cart = cart;
        },

        setProduct(state: ShopSliceState, action: SetProductAction){
            state.product = action.payload.product;
        },

        setVariantColorSelected(state: ShopSliceState, action: SetVariantColorSelectedAction){
            state.variantColorOptionSelected = action.payload.variantOption
        }
    }
})

export const shopSliceActions = shopSlice.actions;
export default shopSlice.reducer;
