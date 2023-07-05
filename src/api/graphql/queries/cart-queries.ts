import { gql } from '@apollo/client'
import { 
    gqlProductField, 
    gqlProductFieldImage, 
    gqlProductFieldImages, 
    gqlProductFieldShippingRate, 
    gqlProductFieldVariants 
} from './product-queries';

const gqlCartFieldLineItems = `line_items{
        id
        cart_id
        product_id
        variant_id
        variant_option_id
        quantity
        product{
            ${gqlProductField}
            ${gqlProductFieldImages}
            ${gqlProductFieldImage}
            ${gqlProductFieldVariants}
            ${gqlProductFieldShippingRate}
        }
}`

export const GQL_CART_LINES_ADD_MUTATION = gql`
    mutation add($lines: [CartLineInput!]!){
        cartLinesAdd(lines: $lines){
            cart{
                id
                note
                created_at
                updated_at
                ${gqlCartFieldLineItems}
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

export const GQL_CART_LINES_UPDATE_MUTATION = gql`
    mutation update($lines: [CartLineUpdateInput!]!){
        cartLinesUpdate(lines: $lines){
            cart{
                id
                note
                created_at
                updated_at
                ${gqlCartFieldLineItems}
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


export const GQL_CART_LINES_REMOVE_MUTATION = gql`
    mutation remove($lineIds: [Int!]!){
        cartLinesRemove(lineIds: $lineIds){
            cart{
                id
                note
                created_at
                updated_at
                ${gqlCartFieldLineItems}
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

export const GQL_CART_QUERY = gql`
        query {
            cart{
                cart{
                    id
                    note
                    created_at
                    updated_at
                    ${gqlCartFieldLineItems}
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
