import {gql} from '@apollo/client'
import { GQLFieldsOptionalOrder } from '../../../types/api'

export const gqlOrderFields = `
    id
    customer_id
    name
    order_number
    email
    phone
    processed_at
    fulfillment_status
    cancel_reason
    canceled_at
    currency_code
    total_price
    subtotal_price
    total_tax
    total_shipping_price
`


export const gqlOrderItemFields = `
        id
        order_id
        product_id
        variant_id
        variant_title
        variant_option_name
        fulfillment_status
        grams
        pre_tax_price
        price
        quantity
        requires_shipping
        sku
        title
        name
        tip_payment_gateway
        tip_payment_method
        customer_payment_gateway_id
        total_discount
    
`


const gqlOrderFieldLineItems = `line_items{
    ${gqlOrderItemFields}
}`

const gqlOrderFieldShippingAddress = `shipping_address{
    id
    customer_id
    address1
    address2
    city
    company
    country
    country_code
    country_name
    is_default
    first_name
    last_name
    name
    latitude
    longitude
    phone
    province
    province_code
    zip
}`

export const GQL_ORDER_QUERY = (fieldsOptional: GQLFieldsOptionalOrder)=>{
    const {shippingAddress, lineItems} = fieldsOptional;
    return gql`
        mutation Order($orderName: Int!){
            order(number: $orderName){
                ${gqlOrderFields}
                ${lineItems ? gqlOrderFieldLineItems : ''}
                ${shippingAddress ? gqlOrderFieldShippingAddress : ''}
            }
        }
    `
}