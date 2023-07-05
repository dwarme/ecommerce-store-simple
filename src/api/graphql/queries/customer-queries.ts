import {gql} from '@apollo/client'
import { GQLFieldsOptionalsCustomer } from '../../../types/api'
import { gqlOrderFields } from './order-queries'
import { gqlCustomerAddressFields } from './customer-address-queries';

const gqlCustomerFieldAddresses = `addresses{
    ${gqlCustomerAddressFields}
}`;

const gqlCustomerFieldDefaultAddress = `default_address{
    ${gqlCustomerAddressFields}
}`

const gqlCustomerFieldOrders = `orders{
    ${gqlOrderFields}
}`

export const GQL_CUSTOMER_CREATE_MUTATION = (fieldsOptional: GQLFieldsOptionalsCustomer = {})=>{
    const {addresses, orders, defaultAddress} = fieldsOptional
    return gql`
    mutation Create($input: CustomerCreateInput!){
        customerCreate(input: $input){
            customer{
                id
                accepts_marketing
                email
                first_name
                last_name
                phone
                ${addresses ? gqlCustomerFieldAddresses : ''}
                ${orders ? gqlCustomerFieldOrders : ''}
                ${defaultAddress ? gqlCustomerFieldDefaultAddress : ''}
            }

            error{
                type
                code
                detail
                message
            }
        }
    }
`}

export const GQL_CUSTOMER_UPDATE_MUTATION = (fieldsOptional: GQLFieldsOptionalsCustomer = {})=>{
    
    const {addresses, orders, defaultAddress} = fieldsOptional;

    return gql`
        mutation Update($customer: CustomerUpdateInput!){
            customerUpdate(customer: $customer){
                customer{
                    id
                    accepts_marketing
                    email
                    first_name
                    last_name
                    phone
                    ${addresses ? gqlCustomerFieldAddresses : ''}
                    ${orders ? gqlCustomerFieldOrders : ''}
                    ${defaultAddress ? gqlCustomerFieldDefaultAddress : ''}
                }

                error{
                    type
                    code
                    detail
                    message
                }
            }
        }
    `
}

export const GQL_CUSTOMER_QUERY = (fieldsOptional: GQLFieldsOptionalsCustomer = {})=>{
    
    const {addresses, orders, defaultAddress} = fieldsOptional;

    return gql`
        mutation{
            customer{
                id
                accepts_marketing
                email
                first_name
                last_name
                phone
                ${addresses ? gqlCustomerFieldAddresses : ''}
                ${orders ? gqlCustomerFieldOrders : ''}
                ${defaultAddress ? gqlCustomerFieldDefaultAddress : ''}
            }

            error{
                type
                code
                detail
                message
            }
        }
    `
}
