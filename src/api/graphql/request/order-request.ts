import { doRequestQuery } from ".";
import { IOrderListing } from "../../../types";
import { GQLFieldsOptionalOrder } from "../../../types/api";
import { AppAPIClientRequestErrorData } from "../../../types/error";
import { GQL_ORDER_QUERY } from "../queries/order-queries";

async function requestOrderRetrieve(orderNumber: number, fieldsOptional: GQLFieldsOptionalOrder = {}){
    const {error, data} = await doRequestQuery(
        GQL_ORDER_QUERY(fieldsOptional), 
        {orderNumber}
    )
    
    if(error) return {error}

    const responseData = data.order;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return { error }
    }

    const order: IOrderListing = responseData.order;
    return { order }
}

const gqlOrderRequest = {
    retrieve: requestOrderRetrieve
}

export default gqlOrderRequest;