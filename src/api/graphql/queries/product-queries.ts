import { gql } from '@apollo/client'
import { GQLFieldsOptionalProduct } from '../../../types/api'

export const gqlProductField = `
    id
    title
    published_at
    tags
    metafields_global_title_tag
    metafields_global_description_tag
    seo_description
    seo_title
    created_at
    updated_at
    status
`;


export const gqlProductFieldImage = `image{
    id
    product_id
    is_default
    position
    src
    width
    height
    alt
    created_at
    updated_at
}`;

export const gqlProductFieldImages = `images{
    id
    product_id
    is_default
    position
    src
    width
    height
    alt
    created_at
    updated_at
    variant_ids
}`

export const gqlProductFieldVariants = `variants{
        id
        product_id
        image_id
        position
        price
        compare_at_price
        grams
        requires_shipping
        sku
        title
        created_at
        updated_at
        weight
        weight_unit
        options{
            id
            product_id
            variant_id
            name
            value
            quantity_available
            note
        }
}`

export const gqlProductFieldShippingRate = `shipping_rate{
    id
    product_id
    title
    price
    compare_at_price
}`

export const GQL_PRODUCT_QUERY = (fieldsOptional: GQLFieldsOptionalProduct) => {
    const { image, images, variants, shippingRate } = fieldsOptional;
    return gql`
    query ProductSelect($id: Int!){
        product(id: $id){
            product{
                ${gqlProductField}
                ${image ? gqlProductFieldImage : ''}
                ${images ? gqlProductFieldImages : ''}
                ${variants ? gqlProductFieldVariants : ''}
                ${shippingRate ? gqlProductFieldShippingRate : ''}
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

export const GQL_PRODUCTS_QUERY = (fieldsOptional: GQLFieldsOptionalProduct) => {
    const { image, images, variants, shippingRate } = fieldsOptional;
    return gql`
        query{
            products{
                product{
                    ${gqlProductField}
                    ${image ? gqlProductFieldImage : ''}
                    ${images ? gqlProductFieldImages : ''}
                    ${variants ? gqlProductFieldVariants : ''}
                    ${shippingRate ? gqlProductFieldShippingRate : ''}
                    
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
