import { doRequestMutation } from ".";
import { ICustomerAddress, IMailingAddressInput } from "../../../types";
import { AppAPIClientRequestErrorData } from "../../../types/error";
import { 
    GQL_CUSTOMER_ADDRESS_CREATE_MUTATION, 
    GQL_CUSTOMER_ADDRESS_UPDATE_MUTATION 
} from "../queries/customer-address-queries";

async function customerAddressCreate(input: IMailingAddressInput){

    const {error, data} = await doRequestMutation(
        GQL_CUSTOMER_ADDRESS_CREATE_MUTATION,
        {address: input}
    )

    if(error) return {error}

    const responseData = data.customerAddressCreate;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return { error }
    }

    const address: ICustomerAddress = responseData.customerAddress;
    return { address }
}

async function customerAddressUpdate(input: ICustomerAddress){

    let inputMailingAddress = input as any;
    delete inputMailingAddress.id;
    
    const {error, data} = await doRequestMutation(
        GQL_CUSTOMER_ADDRESS_UPDATE_MUTATION,
        {
            id: input.id,
            address: inputMailingAddress
        }
    )

    if(error) return {error};

    const responseData = data.customerAddressUpdate;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return { error }
    }

    const address: ICustomerAddress = responseData.customerAddress;
    return { address }
}

const gqlCustomerAddressRequest = {
    create: customerAddressCreate,
    update: customerAddressUpdate,
}

export default gqlCustomerAddressRequest;