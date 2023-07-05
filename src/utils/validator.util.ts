import validator from "validator"
import { AUTHORIZED_COUNTRY_CODE, AUTHORIZED_COUNTRY_NAME, AUTHORIZED_PHONE_LOCALE, CUSTOMER_ADDRESS_LENGTH, EMAIL_LENGTH, NAME_LENGTH } from "./constants.util"

export const checkID = (id: number, maxLength?: number): boolean =>{
    maxLength = maxLength ?? 10;
    return typeof id === 'number' && id.toString().length <= maxLength
}

export const checkName = (name: string): boolean=>{
    return validator.isLength(name, NAME_LENGTH)
}

export const checkEmail = (email: string): boolean=>{
    if(!validator.isLength(email, EMAIL_LENGTH)) return false;
    return validator.isEmail(email)
}

export const checkAddress = (address: string, isOtional?: boolean): boolean=>{
    if(isOtional && address.length === 0) return true;
    return validator.isLength(address, CUSTOMER_ADDRESS_LENGTH)
}

export const checkPhone = (phone: string): boolean=>{
    return validator.isMobilePhone(phone, AUTHORIZED_PHONE_LOCALE)
}

export const checkCountry = (country: string): boolean =>{
    return AUTHORIZED_COUNTRY_NAME.includes(country)
}
export const checkCountryCode = (countryCode: string): boolean =>{
    return AUTHORIZED_COUNTRY_CODE.includes(countryCode)
}

export const checkCity = (city: string): boolean=>{
    //this can be improved by adding more check ( if the city exists in given country ) 
    return validator.isLength(city, {min: 2, max: 150})
}

export const checkProvince = (province: string): boolean=>{
    //this function can be improved by adding more check ( if the province exists in given region/city ) 
    return validator.isLength(province, {min: 2, max: 150})
}

export const checkZipCode = (zipCode: string): boolean =>{
    //this function can be improved by adding more check ( if the zip code exists in given country and region/city ) 
    return validator.isLength(zipCode, {min: 4, max: 10})
}

export const checkAddressCompany = (company: string)=>{
    return checkAddress(company, true)
}