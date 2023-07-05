import { FormFieldsReducerAction, FormFieldsReducerInput, FormFieldsReducerState, FormFieldsReducerType } from "../types/form-reducer.d";
import { getLocale } from "../utils/locales.util";
import { checkAddress, checkCity, checkCountry, checkEmail, checkName, checkPhone, checkProvince, checkZipCode } from "../utils/validator.util";

const defaultValue = (): FormFieldsReducerInput => {
    return { error: undefined, value: '' }
}

const lang = getLocale();

const initialState: FormFieldsReducerState = {
    changed: false,
    firstname: defaultValue(),
    lastname: defaultValue(),
    email: defaultValue(),
    phone: defaultValue(),
    address1: defaultValue(),
    address2: defaultValue(),
    company: defaultValue(),
    country: defaultValue(),
    province: defaultValue(),
    city: defaultValue(),
    zip: defaultValue(),
}

const reducer = (state: FormFieldsReducerState, action: FormFieldsReducerAction): FormFieldsReducerState => {
    const { payload, type } = action
    switch (type) {
        case FormFieldsReducerType.FIRSTNAME:
            return {
                ...state,
                changed: true,
                firstname: {
                    value: payload.value,
                    error: checkName(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_firstname_error }
                }
            }

        case FormFieldsReducerType.LASTNAME:
            return {
                ...state,
                changed: true,
                lastname: {
                    value: payload.value,
                    error: checkName(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_lastname_error }
                }
            }

        case FormFieldsReducerType.EMAIL: return {
            ...state,
            changed: true,
            email: {
                value: payload.value,
                error: checkEmail(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_email_error }
            }
        }

        case FormFieldsReducerType.PHONE: return {
            ...state,
            changed: true,
            phone: {
                value: payload.value,
                error: checkPhone(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_phone_error}
            }
        }

        case FormFieldsReducerType.ADDRESS1: return {
            ...state,
            changed: true,
            address1: {
                value: payload.value,
                error: payload.value === state.address1.value ? undefined : { message: lang.general.shipping_page.shipping_form_address_error}
            }
        }

        case FormFieldsReducerType.ADDRESS2: return {
            ...state,
            changed: true,
            address2: {
                value: payload.value,
                error: checkAddress(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_address_error }
            }
        }

        case FormFieldsReducerType.COMPANY: return {
            ...state,
            changed: true,
            company: {
                value: payload.value,
                error: payload.value === state.company.value ? undefined : { message: lang.general.shipping_page.shipping_form_address_error }
            }
        }

        case FormFieldsReducerType.COUNTRY: return {
            ...state,
            changed: true,
            country: {
                value: payload.value,
                error: checkCountry(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_country_error }
            }
        }

        case FormFieldsReducerType.PROVINCE: return {
            ...state,
            changed: true,
            province: {
                value: payload.value,
                error: checkProvince(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_province_error }
            }
        }

        case FormFieldsReducerType.CITY: return {
            ...state,
            changed: true,
            city: {
                value: payload.value,
                error: checkCity(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_city_error }
            }
        }

        case FormFieldsReducerType.ZIP: return {
            ...state,
            changed: true,
            zip: {
                value: payload.value,
                error: checkZipCode(payload.value) ? undefined : { message: lang.general.shipping_page.shipping_form_zip_error }
            }
        }

        default: return {
            ...state
        }

    }
}

const formFieldsReducer = {
    initialState,
    reducer
}

export default formFieldsReducer;