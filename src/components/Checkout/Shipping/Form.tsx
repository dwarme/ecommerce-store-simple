import { useCallback, useState } from "react";
import useShop from "../../../hooks/shop/useShop";
import useFormFields from "../../../hooks/useFormFields";
import { ICustomerCreateInput, ICustomerListing, IMailingAddressInput } from "../../../types";
import FormInput from "../../Form/FormInput";
import FormZipCodeCity from "../../Form/FormZipCodeCity";
import Continue from "../../Button/Checkout/Continue";
import formFieldsReducer from "../../../reducers/form-fields-reducer";
import { CUSTOMER_ADDRESS_LENGTH, EMAIL_LENGTH, NAME_LENGTH, PHONE_LENGTH } from "../../../utils/constants.util";

const Form: React.FC<{customer?: ICustomerListing}> = ({customer})=>{
    const [isLoading, setLoading] = useState(false)
    const {
        state,
        handleFirtsname,
        handleLastname,
        handleAddress1,
        handleAddress2,
        handleCountry,
        handleCity,
        handleZip,
        handleEmail,
        handlePhone,
        isFieldsOk
    } = useFormFields({...formFieldsReducer.initialState, country:{value: 'Italy'}});

    const {
        shop, 
        updateCustomer, 
        createCustomer,
        updateCustomerAddress,
        createCustomerAddress
        
    } = useShop()
    const btnContinueDisable = !isFieldsOk() || isLoading;

    const saveCustomerInfo = useCallback(async()=>{
        if(isLoading) return;
        setLoading(true);

        const customerInput: ICustomerCreateInput = {
            last_name: state.firstname.value,
            first_name: state.lastname.value,
            email: state.email.value,
            phone: state.phone.value,
            accepts_marketing: true
        }

        const customerAddressInput: IMailingAddressInput = {
            first_name: customerInput.first_name,
            last_name: customerInput.last_name,
            phone: customerInput.phone,
            address1: state.address1.value,
            address2: state.address2.value,
            company: state.company.value,
            country: state.country.value,
            city: state.city.value,
            province: "",
            zip: state.zip.value,
            is_default: true,
        }

        if(customer){
            const customerUpdateError = await updateCustomer({...customer, ...customerInput});
            if(customerUpdateError){
                setLoading(false);
                return;
            }
        }else{
            const customerCreateError = await createCustomer(customerInput);
            if(customerCreateError){
                setLoading(false);
                return;
            }
        }

        if(customer?.addresses.length){
            const addressUpdateError = await updateCustomerAddress({...customer.addresses[0], ...customerAddressInput});
            if(addressUpdateError){
                setLoading(false)
                return;
            }

            window.location.href = shop.pathsUrl.checkout.billing;

        }else{
            const addressCreateError = await createCustomerAddress(customerAddressInput);
            if(addressCreateError){
                setLoading(false);
                return;
            }

            window.location.href = shop.pathsUrl.checkout.billing;
        }
    }, [isLoading, state, customer, shop, createCustomer, updateCustomer])

    const handleSubmit = (ev: any)=>{
        ev.preventDefault();
        saveCustomerInfo()
    }

    return (
        <div data-core-fade-transition-wrapper="" className="r-fade-transition-enter-done">
            <form action="/" onSubmit={handleSubmit} className="rs-checkout-shipping as-l-container">
                <div className="rs-shipping-header-container">
                    <h1 id="rs-checkout-header" className="rs-shipping-header" tabIndex={-1}>{shop.language.general.shipping_page.title}</h1>
                </div>
                <div className="rs-shipping-container">
                    <fieldset aria-describedby="rs-shipping-policy-header rs-shipping-policy-content rs-shipping-policy-link">
                        <legend>
                            <h2 className="rf-form-layout-section-header"><span>{shop.language.general.shipping_page.fields_address_title}</span></h2>
                            <span>{shop.language.general.shipping_page.fields_address_subtitle}</span>
                        </legend>
                        <div className="large-12 rs-shippingaddress column small-12">
                            <div className="rs-shipping-newaddress-wrapper">
                                <div className="rf-form-layout-root">
                                    <div className="rf-form-layout">
                                        <div className="rf-form-layout-section rf-form-layout-section--firstName">
                                            <FormInput
                                                type="text"
                                                name="firstname"
                                                label={shop.language.general.customer.addresses.first_name}
                                                onChange={handleFirtsname}
                                                disabled={isLoading}
                                                error={state.firstname.error ? true: false}
                                                message={state.firstname.error?.message}
                                                defaultValue={state.firstname.value.toLowerCase()}
                                                required={true}
                                                minLength={NAME_LENGTH.min}
                                                maxLength={NAME_LENGTH.max}
                                            />

                                            <FormInput
                                                type="text"
                                                name="lastname"
                                                label={shop.language.general.customer.addresses.last_name}
                                                onChange={handleLastname}
                                                disabled={isLoading}
                                                error={state.lastname.error ? true : false}
                                                message={state.lastname.error?.message}
                                                defaultValue={state.lastname.value.toLowerCase()}
                                                required={true}
                                                minLength={NAME_LENGTH.min}
                                                maxLength={NAME_LENGTH.max}
                                            />

                                            <FormInput
                                                type="text"
                                                name="address1"
                                                label={shop.language.general.customer.addresses.address1}
                                                onChange={handleAddress1}
                                                disabled={isLoading}
                                                error={state.address1.error ? true : false}
                                                message={state.address1.error?.message}
                                                defaultValue={state.address1.value.toLowerCase()}
                                                required={true}
                                                minLength={CUSTOMER_ADDRESS_LENGTH.min}
                                                maxLength={CUSTOMER_ADDRESS_LENGTH.max}
                                            />

                                            <FormInput
                                                type="text"
                                                name="address2"
                                                label={shop.language.general.customer.addresses.address2}
                                                onChange={handleAddress2}
                                                disabled={isLoading}
                                                error={state.address2.error ? true : false}
                                                message={state.address2.error?.message}
                                                defaultValue={state.address2.value.toLowerCase()}
                                                required={false}
                                                minLength={CUSTOMER_ADDRESS_LENGTH.min}
                                                maxLength={CUSTOMER_ADDRESS_LENGTH.max}
                                            />

                                            <FormZipCodeCity
                                                onCityChange={handleCity}
                                                onZipCodeChange={handleZip}
                                                disabled={isLoading}
                                                zipCode={{
                                                    defaultValue: state.zip.value,
                                                    valid: !state.zip.error,
                                                    errorMessage: state.zip.error?.message ?? ""
                                                }}

                                                city={{
                                                    defaultValue: state.city.value,
                                                    valid: !state.city.error,
                                                    errorMessage: state.city.error?.message ?? ""
                                                }}
                                            />

                                            {/* Perform country selection with google maps Place API */}
                                            <FormInput
                                                type="text"
                                                name="country"
                                                label={shop.language.general.customer.addresses.country}
                                                onChange={handleCountry}
                                                disabled={true}
                                                error={state.country.error ? true : false}
                                                message={state.country.error?.message}
                                                defaultValue={state.country.value}
                                                required={true}
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="large-6 small-12"></div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <fieldset className="rs-shipping-addresscontact">
                    <legend className="large-6 small-12">
                        <h2 className="rs-address-subheader rf-form-layout-section-header">{shop.language.general.shipping_page.fields_contact_title}</h2>
                    </legend>
                    <FormInput
                        type="email"
                        name="address_email"
                        label={shop.language.general.customer.contact.email}
                        onChange={handleEmail}
                        disabled={isLoading}
                        error={state.email.error ? true : false}
                        message={state.email.error?.message}
                        supplementalInfo={shop.language.general.shipping_page.shipping_form_email_supplementinfo}
                        defaultValue={state.email.value.toLowerCase()}
                        required={true}
                        minLength={EMAIL_LENGTH.min}
                        maxLength={EMAIL_LENGTH.max}
                    />

                    <FormInput
                        type="text"
                        name="phone_number"
                        label={shop.language.general.customer.contact.phone}
                        onChange={handlePhone}
                        disabled={isLoading}
                        error={state.phone.error ? true : false}
                        message={state.phone.error?.message}
                        supplementalInfo={shop.language.general.shipping_page.shipping_form_phone_supplementinfo}
                        defaultValue={state.phone.value.toLowerCase()}
                        required={true}
                        minLength={PHONE_LENGTH.min}
                        maxLength={PHONE_LENGTH.max}
                    />

                </fieldset>

                <Continue
                    title={shop.language.general.shipping_page.shipping_form_submit}
                    disabled={btnContinueDisable}
                    loading={isLoading}
                />
            </form>
        </div>
    )

}

export default Form;