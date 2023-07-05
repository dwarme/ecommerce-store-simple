export type GQLFieldsOptionalsCustomer = {
    readonly addresses?: boolean;
    readonly defaultAddress?: boolean;
    readonly orders?: boolean
}

export type GQLFieldsOptionalProduct = {
    readonly image?: boolean;
    readonly images?: boolean;
    readonly variants?: boolean;
    readonly shippingRate?: boolean;
}

export type GQLFieldsOptionalOrder = {
    shippingAddress?: boolean;
    lineItems?: boolean;
}