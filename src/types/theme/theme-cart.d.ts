import { ICartLineItemListing } from "..";

export interface ThemeCartItemsProps{
    cartItems: ICartLineItemListing[];
}

export interface ThemeCartItemProps{
    cartItem: ICartLineItemListing;
}

export interface ThemeCartSummaryProps{
    price: {
        total: string;
        subtotal: string;
        shippingFee: string;
    };
}