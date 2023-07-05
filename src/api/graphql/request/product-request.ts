import { doRequestQuery } from ".";
import { IProductListing } from "../../../types";
import { GQLFieldsOptionalProduct } from "../../../types/api";
import { AppAPIClientRequestErrorData } from "../../../types/error";
import { 
    GQL_PRODUCTS_QUERY, 
    GQL_PRODUCT_QUERY 
} from "../queries/product-queries";

async function requestProductRetrieve(productId: number, fieldsOptional: GQLFieldsOptionalProduct = {}){
    const {error, data} = await doRequestQuery(
        GQL_PRODUCT_QUERY(fieldsOptional), 
        {id: productId}
    )
    if(error) return {error};

    const responseData = data.product;
    if(responseData.error) {
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const product: IProductListing = responseData.product;
    return {product}
}

async function requestProductList(fieldsOptional: GQLFieldsOptionalProduct = {}){

    const {error, data} = await doRequestQuery(GQL_PRODUCTS_QUERY(fieldsOptional));
    if(error) return {error}

    const responseData = data.products;
    if(responseData.error) {
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const products: IProductListing[] = responseData.product.nodes;
    return {products}
}

const gqlProductRequest = {
    retrieve: requestProductRetrieve,
    list: requestProductList
}

export default gqlProductRequest;