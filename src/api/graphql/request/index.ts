import { DocumentNode } from "@apollo/client"
import { getGraphqlClient } from "../../../utils/api.util";
import { AppError } from "../../../models/error-model";
import { AppAPIClientRequestErrorData } from "../../../types/error";

const client = getGraphqlClient();

export const doRequestQuery = async (query: DocumentNode, variables?: { [key: string]: any }) => {
    const queryResponse = await client.query({
        query,
        variables
    });

    if (queryResponse.errors || queryResponse.error) {
        const error = AppError.generate({
            type: 'api_error',
            message: 'An error occured while fetching user',
            detail: 'graphql-client',
        }) as AppAPIClientRequestErrorData;

        return { error }
    }

    return {data: queryResponse.data}
}

export const doRequestMutation = async (mutation: DocumentNode, variables?: { [key: string]: any }) => {
    const mutationResponse = await client.mutate({
        mutation,
        variables
    });

    if (mutationResponse.errors) {
        const error = AppError.generate({
            type: 'api_error',
            message: 'An error occured while fetching user',
            detail: 'graphql-client',
        }) as AppAPIClientRequestErrorData;

        return { error }
    }

    return {data: mutationResponse.data}
}