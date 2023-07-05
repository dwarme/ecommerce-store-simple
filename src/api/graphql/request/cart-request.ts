import { 
    GQL_CART_LINES_ADD_MUTATION, 
    GQL_CART_LINES_REMOVE_MUTATION, 
    GQL_CART_LINES_UPDATE_MUTATION, 
    GQL_CART_QUERY 
} from "../queries/cart-queries";
import { AppAPIClientRequestErrorData } from "../../../types/error";
import { ICartLineInput, ICartLineUpdateInput, ICartListing } from "../../../types";
import { doRequestMutation, doRequestQuery } from ".";

async function requestCartRetrieve(){
    const {error, data} = await doRequestQuery( GQL_CART_QUERY );

    if(error) return {error}

    const responseData = data.cart;
    if(responseData.error) {
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const cart: ICartListing = responseData.cart;
    return {cart}
}

// Add items to cart
async function requestCartLinesAdd(lines: ICartLineInput[]){
    const {error, data} = await doRequestMutation(
        GQL_CART_LINES_ADD_MUTATION,
        {lines}
    )

    if(error) return {error}

    const responseData = data.cartLinesAdd;
    if(responseData.error) {
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const cart: ICartListing = responseData.cart;
    return {cart}
}

// Update cart items
async function requestCartLinesUpdate(lines: ICartLineUpdateInput[]){
    const {error, data} = await doRequestMutation(
        GQL_CART_LINES_UPDATE_MUTATION,
        {lines}
    )

    if(error) return {error}

    const responseData = data.cartLinesUpdate;
    if(responseData.error) {
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const cart: ICartListing = responseData.cart;
    return {cart}
}

//Remove cart items
async function requestCartLinesRemove(lineIds: number[]){
    const {error, data} = await doRequestMutation(
        GQL_CART_LINES_REMOVE_MUTATION,
        {lineIds}
    )

    if(error) return {error}

    const responseData = data.cartLinesRemove;
    if(responseData.error) {
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const cart: ICartListing = responseData.cart;
    return {cart}
}


const gqlCartRequest = {
    retrieve: requestCartRetrieve,
    lines: {
        add: requestCartLinesAdd,
        update: requestCartLinesUpdate,
        remove: requestCartLinesRemove
    }
}

export default gqlCartRequest;