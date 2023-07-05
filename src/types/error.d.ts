export type ObjectErrorType =
    | 'AppError'
    | 'AppInvalidRequestError'
    | 'AppAuthenticationError'
    | 'AppPermissionError'
    | 'AppAPIError'
    | 'AppJwtError'
    | 'AppUserError'
    | 'AppCustomerError'
    | 'AppCustomerAddressError'
    | 'AppProductError'
    | 'AppOrderError'
    | 'AppCartError'

export type RawErrorType =
    | 'invalid_request_error'
    | 'authentication_error'
    | 'internal_error'
    | 'api_error'
    | 'user_error'
    | 'customer_error'
    | 'customer_address_error'
    | 'cart_error'
    | 'product_error'
    | 'order_error'
    | 'jwt_error'

export type AppRawError = {
    message?: string;
    type: RawErrorType;
    statusCode?: number;
    code?: AppErrorCode;
    detail?: string;
}

type CustomerInputErrorCode =
    | 'BLANK'
    | 'INVALID'
    | 'TAKEN'
    | 'TOO_LONG'
    | 'TOO_SHORT'
    | 'UNIDENTIFIED_CUSTOMER'
    | 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE'
    | 'CONTAINS_HTML_TAGS'
    | 'CONTAINS_URL'
    | 'ADDRESS_NOT_FOUND'

export type AppErrorCode =
    & CustomerInputErrorCode
    | 'permission_required'
    | 'authentication_required'
    | 'password_incorrect'
    | 'already_connected'
    | 'user_not_found'
    | 'user_already_exists'
    | 'jwt_invalid'
    | 'jwt_token_required'
    | 'jwt_expired'
    | 'jwt_cookie_missing'
    | 'jwt_failed_to_create'
    | 'unknow'
    | 'product_not_found'
    | 'image_not_found'
    | 'variant_not_found'
    | 'variant_option_not_found'
    | 'cart_not_found'
    | 'cart_item_not_found'
    | 'cart_already_exists'
    | 'customer_not_found'
    | 'customer_already_exists'
    | 'address_not_found'
    | 'order_not_found'
    | 'order_item_not_found'
    | 'shipping_rate_not_found'
    | 'shipping_rate_already_exists'

export type AppAPIClientRequestErrorData = {
    type: ObjectErrorType;
    code?: AppErrorCode;
    detail?: string;
    statusCode?: number;
    message?: string;
}