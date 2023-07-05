import {gql} from '@apollo/client'

export const gqlUserFields = `
    id
    email
    first_name
    last_name
    phone
    password
    permissions
    user_type
`

export const GQL_USER_QUERY = gql`
    query User($userId: Int!){
        user(id: $userId){
            user{
                ${gqlUserFields}
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

export const GQL_USERS_QUERY = gql`
    query{
        users{
            user{
                ${gqlUserFields}
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

export const GQL_USER_CREATE_MUTATION = gql`
    mutation UserCreate($input: UserInput!){
        userCreate(input: $input){
            user{
                ${gqlUserFields}
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

export const GQL_USER_UPDATE_MUTATION = gql`
    mutation UserUpdate($user: UserUpdateInput!){
        userUpdate(user: $user){
            user{
                ${gqlUserFields}
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

export const GQL_USER_UPDATE_PASSWORD_MUTATION = gql`
    mutation UserUpdatePassword($newPassword: String!){
        userUpdatePassword(newPassword: $newPassword){
            user{
                ${gqlUserFields}
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

export const GQL_USER_UPDATE_AUTHORIZATIONS = gql`
    mutation UserUpdateAuthorizations($input: UserUpdateAuthorizzationsInput!){
        userUpdateAuthorizations(input: $input){
            user{
                ${gqlUserFields}
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

export const GQL_USER_REMOVE_MUTATION = gql`
    mutation UserRemove($userId: Int!){
        userRemove(id: $userId){
            error{
                type
                code
                detail
                message
            }
        }
    }
`