import {gql} from '@apollo/client'
import { gqlUserFields } from './user-queries'

export const GQL_AUTH_SIGNIN_MUTATION = gql`
    mutation AuthSignin($input: UserSigninInput!){
        authSignin(input: $input){
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