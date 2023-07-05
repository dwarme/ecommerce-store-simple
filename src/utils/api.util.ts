import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = process.env.NODE_ENV === 'development' ? "http://localhost:8066/graphql" : "/graphql" 
export const getGraphqlClient = () => {
    const httpLink = new HttpLink({
        uri: API_URL
    });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })

}