export enum FormFieldsReducerType {
    LASTNAME = 'LASTNAME',
    FIRSTNAME = 'FIRSTNAME',
    EMAIL = 'EMAIL',
    PHONE = 'PHONE',
    ADDRESS1 = 'ADDRESS1',
    ADDRESS2 = 'ADDRESS2',
    COMPANY = 'COMPANY',
    COUNTRY = 'COUNTRY',
    PROVINCE = 'PROVINCE',
    CITY = 'CITY',
    ZIP = 'ZIP',
}

export interface FormFieldsReducerAction {
    type: Type
    payload: {
        value: string
    }
}

export interface FormFieldsReducerInput {
    value: string
    error?: {
        message: string
    }
}

export interface FormFieldsReducerState {
    changed: boolean;
    firstname: FormFieldsReducerInput;
    lastname: FormFieldsReducerInput;
    email: FormFieldsReducerInput;
    phone: FormFieldsReducerInput;
    address1: FormFieldsReducerInput;
    address2: FormFieldsReducerInput;
    company: FormFieldsReducerInput;
    country: FormFieldsReducerInput;
    province: FormFieldsReducerInput;
    city: FormFieldsReducerInput;
    zip: FormFieldsReducerInput;
}