import { doRequestMutation, doRequestQuery } from ".";
import { 
    IUser, 
    IUserInput, 
    IUserUpdateAuthorizzationsInput, 
    IUserUpdateInput 
} from "../../../types";
import { AppAPIClientRequestErrorData } from "../../../types/error";
import { 
    GQL_USERS_QUERY, 
    GQL_USER_CREATE_MUTATION, 
    GQL_USER_QUERY, 
    GQL_USER_REMOVE_MUTATION, 
    GQL_USER_UPDATE_AUTHORIZATIONS, 
    GQL_USER_UPDATE_MUTATION, 
    GQL_USER_UPDATE_PASSWORD_MUTATION 
} from "../queries/user-queries";


async function requestUserRetrieve(userId: number){

    const {error, data} = await doRequestQuery(
        GQL_USER_QUERY, 
        {userId}
    );

    if(error) return {error};

    const responseData = data.user;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const user: IUser = responseData.user;
    return {user}
}

async function requestUserList(){

    const {error, data} = await doRequestQuery(GQL_USERS_QUERY);
    if(error) return {error};
    
    const responseData = data.users;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const users: IUser[] = responseData.users;
    return {users}
}

async function requestUserCreate(input: IUserInput){

    const {error, data} = await doRequestMutation(
        GQL_USER_CREATE_MUTATION, 
        {input}
    );
    if(error) return {error};

    const responseData = data.userCreate;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const user: IUser = responseData.user;
    return {user}
}

async function requestUserUpdate(input: IUserUpdateInput){

    const {error, data} = await doRequestMutation(
        GQL_USER_UPDATE_MUTATION, 
        {user: input}
    );

    if(error) return {error};

    const responseData = data.userUpdate;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const user: IUser = responseData.user;
    return {user}
}

async function requestUserUpdateAuthorizations(input: IUserUpdateAuthorizzationsInput){

    const {error, data} = await doRequestMutation(GQL_USER_UPDATE_AUTHORIZATIONS, {input});
    if(error) return {error};

    const responseData = data.userUpdateAuthorizations;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const user: IUser = responseData.user;
    return {user}
}

async function requestUserUpdatePassword(newPassword: string){

    const {error, data} = await doRequestMutation(
        GQL_USER_UPDATE_PASSWORD_MUTATION, 
        {newPassword}
    );

    if(error) return {error}

    const responseData = data.userUpdatePassword;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    const user: IUser = responseData.user;
    return {user}
}

async function requestUserRemove(userId: number){
    
    const {error, data} = await doRequestMutation(
        GQL_USER_REMOVE_MUTATION, 
        {userId}
    );
    
    if(error) return {error}

    const responseData = data.userRemove;
    if(responseData.error){
        const error: AppAPIClientRequestErrorData = responseData.error;
        return {error}
    }

    return {}
}

const gqlUserRequest = {
    create: requestUserCreate,
    retrieve: requestUserRetrieve,
    list: requestUserList,
    update:{
        user: requestUserUpdate,
        authorization: requestUserUpdateAuthorizations,
        password: requestUserUpdatePassword
    },
    remove: requestUserRemove
}

export default gqlUserRequest;