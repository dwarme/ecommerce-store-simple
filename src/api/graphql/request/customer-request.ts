import { doRequestMutation, doRequestQuery } from ".";
import { ICustomerCreateInput, ICustomerListing, ICustomerUpdateInput } from "../../../types";
import { GQLFieldsOptionalsCustomer } from "../../../types/api";
import { AppAPIClientRequestErrorData } from "../../../types/error";
import { 
    GQL_CUSTOMER_CREATE_MUTATION, 
    GQL_CUSTOMER_QUERY, 
    GQL_CUSTOMER_UPDATE_MUTATION 
} from "../queries/customer-queries";

async function requestCustomerRetrieve(fieldsOptional?: GQLFieldsOptionalsCustomer){

    const {error, data} = await doRequestQuery(
        GQL_CUSTOMER_QUERY(fieldsOptional)
    );
    
    if(error) return {error};

    const responseData = data.customer;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return { error }
    }

    const customer: ICustomerListing = responseData.customer;
    return { customer }
} 

async function requestCustomerCreate(customerInput: ICustomerCreateInput, fieldsOptional?: GQLFieldsOptionalsCustomer){
    
    const {error, data} = await doRequestMutation(
        GQL_CUSTOMER_CREATE_MUTATION(fieldsOptional), 
        {input: customerInput}
    )

    if(error) return {error}

    const responseData = data.customerCreate;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return { error }
    }

    const customer: ICustomerListing = responseData.customer;
    return { customer }
}


async function requestCustomerUpdate(customerInput: ICustomerUpdateInput, fieldsOptional?: GQLFieldsOptionalsCustomer){
    
    const {error, data} = await doRequestMutation(
        GQL_CUSTOMER_UPDATE_MUTATION(fieldsOptional),
        {customer: customerInput}
    )

    if(error) return { error }

    const responseData = data.customerUpdate;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return { error }
    }

    const customer: ICustomerListing = responseData.customer;
    return { customer }
}  

const gqlCustomerRequest = {
    retrieve: requestCustomerRetrieve,
    create: requestCustomerCreate,
    update: requestCustomerUpdate
}

export default gqlCustomerRequest;