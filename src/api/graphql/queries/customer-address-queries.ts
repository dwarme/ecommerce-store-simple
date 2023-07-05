import { gql } from "@apollo/client";

export const gqlCustomerAddressFields = `
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
`;

export const GQL_CUSTOMER_ADDRESS_CREATE_MUTATION = gql`
    mutation CustomerAddressCreate($address: MailingAddressInput!){
        customerAddressCreate(address: $address){
            customerAddress{
                ${gqlCustomerAddressFields}
            }

            error{
                type
                code
                detail
                message
            }
        }
    }
`;

export const GQL_CUSTOMER_ADDRESS_UPDATE_MUTATION = gql`
    mutation CustomerAddressUpdate($id: Int!, $address:  MailingAddressInput!){
        customerAddressUpdate(id: $id, address: $address){
            customerAddress{
                ${gqlCustomerAddressFields}
            }

            error{
                type
                code
                detail
                message
            }
        }
    }
`;