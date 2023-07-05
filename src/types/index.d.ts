type UserPermissions =
    | 'customers'
    | 'dashboard'
    | 'full'
    | 'marketing'
    | 'order'
    | 'pages'
    | 'preferences'
    | 'products'
    | 'reports'

type UserType = 'regular' | 'restricted';

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    password: string;
    permissions: UserPermissions[];
    user_type: UserType;
}

export interface IMoney {
    amount: number
    currency_code: ICurrencyCode
}

export type ICurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CAD'

export interface IShippingRate {
    id: number;
    product_id: number;
    title: string
    price: number;
    compare_at_price: number;
}

type Status =
    | 'active'
    | 'archived'
    | 'draft'

export interface IProduct {
    id: number;
    title: string;
    published_at: string | null;
    tags: string;
    metafields_global_title_tag: string | null;
    metafields_global_description_tag: string | null;
    seo_description: string;
    seo_title: string;
    created_at: string;
    updated_at: string;
    status: Status;
}

export interface IProductListing extends IProduct {
    image: IProductImageListing;
    images: IProductImageListing[];
    variants: IProductVariantListing[];
    shipping_rate: IShippingRate
}

export interface IProductImage {
    id: number;
    product_id: number;
    is_default: boolean;
    position: number;
    src: string;
    width: number;
    height: number;
    alt: string | null;
    created_at: string;
    updated_at: string;
}

export interface IProductImageListing extends IProductImage{
    variant_ids: number[];
}

type ProductVariantWeightUnit = 'g' | 'kg' | 'oz' | 'lb';

export interface IProductVariant {
    id: number;
    product_id: number;
    image_id: number | null;
    position: number;
    price: number;
    compare_at_price: number | null;
    grams: number;
    requires_shipping: boolean;
    sku: string;
    title: string;
    created_at: string;
    updated_at: string;
    weight: number;
    weight_unit: ProductVariantWeightUnit;
}

export interface IProductVariantListing extends IProductVariant {
    options: IProductVariantOption[]
}

export interface IProductVariantOption {
    id: number;
    product_id: number;
    variant_id: number;
    name: string;
    value: string;
    quantity_available: number;
    note: string | null
}

export interface ICart {
    id: number;
    token: string;
    note: string | null;
    created_at: string;
    updated_at: string;
}

export interface ICartListing extends ICart{
    line_items: ICartLineItemListing[];
    total_quantity: number;
    /*
     * The estimated costs that the buyer will pay at checkout. 
     * The costs are subject to change and changes will be reflected at checkout. 
     * The cost field uses the buyerIdentity field to determine international pricing.
    */
    cost: ICartCost;
}

export interface ICartLineItem {
    id: number;
    cart_id: number;
    product_id: number;
    variant_id: number;
    variant_option_id: number;
    quantity: number;
}

export interface ICartLineItemListing extends ICartLineItem {
    product: IProductListing
    cost: ICartLineCost;
}

export interface ICartLineCost {
    subtotal_amount: number;
    total_amount: number!
}

export interface ICartCost {
    checkout_charge: number;
    subtotal: number;
    total: number;
    total_duty: number;
    total_tax: number;
}

export interface ICustomer {
    id: number;
    accepts_marketing: boolean;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    note: string | null;
    total_spent: string;
    created_at: string;
    updated_at: string;
}

export interface ICustomerListing extends ICustomer {
    default_address: ICustomerAddress;
    addresses: ICustomerAddress[]
    orders: IOrder[]
}

export interface ICustomerAddress {
    id: number;
    customer_id: number;
    address1: string;
    address2?: string | null;
    city: string;
    company: string | null;
    country: string;
    country_code: string;
    country_name: string;
    is_default: boolean;
    first_name: string;
    last_name: string;
    name: string;
    latitude: number | null;
    longitude: number | null;
    phone: string | null;
    province: string | null;
    province_code: string | null;
    zip: string;
}

export interface IOrder {
    id: number;
    customer_id: number;
    name: string;
    order_number: number;
    email: string;
    phone: string;
    processed_at: string;
    fulfillment_status: IOrderFulfillmentStatus;
    cancel_reason: string | null;
    canceled_at: string | null;
    currency_code: ICurrencyCode;
    total_price: number;
    subtotal_price: number;
    total_tax: number;
    total_shipping_price: number;
}

export interface IOrderListing extends IOrder {
    shipping_address: ICustomerAddress
    line_items: IOrderLineItem[]
}

export interface IOrderLineItem {
    id: number;
    order_id: number;
    product_id: number;
    variant_id: number | null;
    variant_title: string | null;
    variant_option_name: string | null;
    fulfillment_status: ILineItemFulfillmentStatus;
    grams: number;
    pre_tax_price: string;
    price: string;
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    title: string;
    name: string;
    tip_payment_gateway: string;
    tip_payment_method: string;
    customer_payment_gateway_id: string; //#Example, stripe customer id
    total_discount: string;
}

export type ILineItemFulfillmentStatus =
    | 'fulfilled'
    | 'not_eligible'
    | 'partial'
    | null;

export type IOrderFulfillmentStatus =
    | 'UNFULFILLED'
    | 'PARTIALLY_FULFILLED'
    | 'FULFILLED'
    | 'RESTOCKED'
    | 'PENDING_FULFILLMENT'
    | 'OPEN'
    | 'IN_PROGRESS'
    | 'ON_HOLD'
    | 'SCHEDULED';


/************************************
  * Input
*************************************/
export interface IUserSigninInput{
    email: string;
    password: string;
}

export interface IUserInput{
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    password: string;
    permissions: UserPermissions[];
    user_type: UserType;
}

export interface IUserUpdateInput{
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
}

export interface IUserUpdateAuthorizzationsInput{
    id: number;
    permissions: UserPermissions[];
    user_type: UserType;
}

export interface IShippingRateInput{
    product_id: number;
    title: string;
    price: number;
    compare_at_price: number;
}

export interface IShippingRateUpdateInput extends IShippingRate{ }

export interface IProductInput {
    title: string;
    tags: string;
    metafields_global_title_tag: string;
    metafields_global_description_tag: string;
    seo_description: string;
    seo_title: string;
    status: Status;
}

export interface IProductUpdateInput extends IProductInput {
    id: number;
}

export interface IProductImageInput {
    product_id: number;
    is_default: boolean;
    position: number;
    src: string;
    width: number;
    height: number;
    alt: string | null;
}

export interface IProductImageUpdateInput {
    id: number;
    is_default: boolean;
    position: number;
    src: string;
    width: number;
    height: number;
    alt: string | null;
}

export interface IProductVariantInput {
    product_id: number;
    image_id: number | null;
    position: number;
    price: string;
    compare_at_price: string | null;
    grams: number;
    requires_shipping: boolean;
    sku: string;
    title: string;
    weight: number;
    weight_unit: ProductVariantWeightUnit;
}

export interface IProductVariantUpdateInput {
    id: number;
    image_id: number | null;
    position: number;
    price: string;
    compare_at_price: string | null;
    grams: number;
    requires_shipping: boolean;
    sku: string;
    title: string;
    weight: number;
    weight_unit: ProductVariantWeightUnit;
}

export interface IProductVariantOptionInput {
    product_id: number;
    variant_id: number;
    name: string;
    value: string;
    quantity_available: number;
    note: string | null;
}

export interface IProductVariantOptionUpdateInput {
    id: number;
    name: string;
    value: string;
    quantity_available: number;
    note: string | null;
}

//"Specifies the input fields to create a merchandise line on a cart."
export interface ICartLineInput {
    product_id: number;
    variant_id: number | null;
    variant_option_id: number | null;
    quantity: number;
}

//"Specifies the input fields to update a line item on a cart."
export interface ICartLineUpdateInput extends ICartLineInput { 
    id: number;
}

//"The fields required to create a new customer."
export interface ICustomerCreateInput {
    //"The customer’s email."
    email: string;
    //"A unique phone number for the customer."
    phone: string;
    //"The customer’s first name."
    first_name: string;
    //"The customer’s last name."
    last_name: string;
    //"Indicates whether the customer has consented to be sent marketing material via email."
    accepts_marketing: boolean;
}

//"Specifies the fields required to update the Customer information."
export interface ICustomerUpdateInput extends ICustomerCreateInput { }

//"Specifies the fields accepted to create or update a mailing address."
export interface IMailingAddressInput {
    is_default: boolean;
    //"The first name of the customer."
    first_name: string;
    //"The last name of the customer."
    last_name: string;
    //"A unique phone number for the customer."
    phone: string;
    //"The first line of the address. Typically the street address or PO Box number."
    address1: string;
    //"The second line of the address. Typically the number of the apartment, suite, or unit."
    address2: string | null;
    //"The name of the city, district, village, or town."
    city: string;
    //"The name of the customer's company or organization."
    company: string | null;
    //"The name of the country."
    country: string;
    //"The region of the address, such as the province, state, or district."
    province: string;
    //"The zip or postal code of the address."
    zip: string;
}

export interface IOrderInput {
    customer_id: number;
    name: string;
    order_number: number;
    email: string;
    phone: string;
    fulfillment_status: IOrderFulfillmentStatus;
    currency_code: ICurrencyCode;
    total_price: number;
    subtotal_price: number;
    total_tax: number;
    total_shipping_price: number;
}

export interface IOrderItemInput {
    order_id: number;
    product_id: number;
    variant_id: number | null;
    variant_title: string | null;
    variant_option_name: string | null;
    fulfillment_status: ILineItemFulfillmentStatus;
    grams: number;
    pre_tax_price: string;
    price: string;
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    title: string;
    name: string;
    tip_payment_gateway: string;
    tip_payment_method: string;
    customer_payment_gateway_id: string; //#Example, stripe customer id
    total_discount: string;
}

export type AlphaLocale =
    | 'en-US'
    | 'bg-BG'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'el-GR'
    | 'es-AR'
    | 'es-ES'
    | 'fr-FR'
    | 'it-IT'
    | 'nb-NO'
    | 'nl-NL'
    | 'nn-NO'
    | 'hu-HU'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'sl-SI'
    | 'sk-SK'
    | 'sr-RS@latin'
    | 'sr-RS'
    | 'sv-SE'
    | 'tr-TR'
    | 'uk-UA'
    | 'ku-IQ'
    | 'ar'
    | 'he'
    | 'fa-IR'
    | 'en-AU'
    | 'en-GB'
    | 'en-HK'
    | 'en-IN'
    | 'en-NZ'
    | 'en-ZA'
    | 'en-ZM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-QM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'pt-BR'
    | 'pl-Pl';

export type MobilePhoneLocale = PhoneLocale | PhoneLocaleAlias;
export type PhoneLocale =
    | 'am-AM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-LB'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'az-AZ'
    | 'bs-BA'
    | 'be-BY'
    | 'bg-BG'
    | 'bn-BD'
    | 'ca-AD'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'de-AT'
    | 'de-CH'
    | 'de-LU'
    | 'el-GR'
    | 'en-AU'
    | 'en-GB'
    | 'en-GG'
    | 'en-GH'
    | 'en-HK'
    | 'en-MO'
    | 'en-IE'
    | 'en-IN'
    | 'en-KE'
    | 'en-MT'
    | 'en-MU'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PK'
    | 'en-PH'
    | 'en-RW'
    | 'en-SG'
    | 'en-SL'
    | 'en-TZ'
    | 'en-UG'
    | 'en-US'
    | 'en-ZA'
    | 'en-ZM'
    | 'en-ZW'
    | 'es-AR'
    | 'es-BO'
    | 'es-CO'
    | 'es-CL'
    | 'es-CR'
    | 'es-DO'
    | 'es-HN'
    | 'es-EC'
    | 'es-ES'
    | 'es-PE'
    | 'es-MX'
    | 'es-PA'
    | 'es-PY'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'fa-IR'
    | 'fi-FI'
    | 'fj-FJ'
    | 'fo-FO'
    | 'fr-FR'
    | 'fr-GF'
    | 'fr-GP'
    | 'fr-MQ'
    | 'fr-RE'
    | 'he-IL'
    | 'hu-HU'
    | 'id-ID'
    | 'it-IT'
    | 'it-SM'
    | 'ja-JP'
    | 'ka-GE'
    | 'kk-KZ'
    | 'kl-GL'
    | 'ko-KR'
    | 'lt-LT'
    | 'lv-LV'
    | 'ms-MY'
    | 'mz-MZ'
    | 'nb-NO'
    | 'ne-NP'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn-NO'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'pt-AO'
    | 'ro-RO'
    | 'ru-RU'
    | 'si-LK'
    | 'sl-SI'
    | 'sk-SK'
    | 'sq-AL'
    | 'sr-RS'
    | 'sv-SE'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'uz-UZ'
    | 'vi-VN'
    | 'zh-CN'
    | 'zh-TW';
type PhoneLocaleAlias = 'en-CA' | 'fr-CA' | 'fr-BE' | 'zh-HK' | 'zh-MO' | 'ga-IE' | 'fr-CH' | 'it-CH';