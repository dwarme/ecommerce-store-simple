import { getLocale } from "./locales.util"

export const getShopData = ()=>{
    return {
        name: "My-store",
        wwwDomain: 'https://www.mydomain.com',
        currency: {
            simbol: "$",
            name: "USD"
        },
        language: getLocale() ,
        pathsUrl: {
            home: '/',
            product: '/shop/:productId',
            cart: '/cart',
            checkout: {
                fulfillment: '/checkout/fulfillment',
                shipping: '/checkout/shipping',
                billing: '/checkout/billing'
            },
            collection: '/collection',
            customer: {
                orders: '/customer/order',
                orderDetails: 'customer/order/:order'
            },
            policy: {
                privacy: '/policy/privacy',
                terms: '/policy/terms',
            }
        }
    
    }
}