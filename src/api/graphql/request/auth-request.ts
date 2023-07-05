import { doRequestMutation } from ".";
import { IUser, IUserSigninInput } from "../../../types";
import { AppAPIClientRequestErrorData } from "../../../types/error";
import { GQL_AUTH_SIGNIN_MUTATION } from "../queries/auth-queries";

async function requestAuthSignin(input: IUserSigninInput){

    const {error, data} = await doRequestMutation(
        GQL_AUTH_SIGNIN_MUTATION, 
        {input}
    );
    
    if(error) return {error}

    const responseData = data.authSignin;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const user: IUser = responseData.user;
    return {user}
}

const gqlAuthRequest = {
    signin: requestAuthSignin
}

export default gqlAuthRequest;