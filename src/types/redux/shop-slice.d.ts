import {PayloadAction} from '@reduxjs/toolkit'
import { ICartListing, ICustomerListing } from "..";
import { ThemeVariantOption } from '../theme/theme-product-selection';

interface VariantColorOptionSelected extends ThemeVariantOption{ }

export interface ShopSliceState{
    customer?: ICustomerListing;
    cart?: ICartListing;
    variantColorOptionSelected?: VariantColorOptionSelected;
    product?: ShopSliceStateProduct;
}

interface ShopSliceStateProduct{
    title: string;
    quantitySelected: number;
    price: string;
}

export type SetCustomerAction = PayloadAction<{ customer: ICustomerListing }>;
export type SetCartAction = PayloadAction<{ cart: ICartListing }>;
export type SetProductAction = PayloadAction<{ product: ShopSliceStateProduct }>
export type SetVariantColorSelectedAction = PayloadAction<{ variantOption: VariantColorOptionSelected }>