import { MobilePhoneLocale } from "../types"

export const CUSTOMER_ADDRESS_LENGTH = {
    min: 2,
    max: 150
}

export const NAME_LENGTH = {
    min: 2,
    max: 50
}

export const EMAIL_LENGTH = {
    min: 5,
    max: 150
}

export const PASSWORD_LENGTH = {
    min: 4,
    max: 16
}

export const PHONE_LENGTH = {
    min: 10,
    max: 16
}

export const AUTHORIZED_PHONE_LOCALE: MobilePhoneLocale[]  = ['it-IT', 'en-US'] 
export const AUTHORIZED_COUNTRY = [
    {code: 'IT', name: 'Italy'}, 
    {code: 'US', name: 'USA'}
]
export const AUTHORIZED_COUNTRY_CODE = ['IT', 'US'];
export const AUTHORIZED_COUNTRY_NAME = ['Italy', 'USA']