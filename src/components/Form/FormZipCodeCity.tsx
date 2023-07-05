import useShop from "../../hooks/shop/useShop";

interface Props {
    onZipCodeChange: (value: string) => void
    onCityChange: (value: string) => void
    zipCode: {
        defaultValue?: string
        valid: boolean
        errorMessage: string
    }
    city: {
        defaultValue?: string
        valid: boolean
        errorMessage: string
    }
    disabled: boolean
}

const FormZipCodeCity = (props: Props) => {

    const {shop} = useShop();

    return (
        <div className="rf-form-layout-row rf-form-layout-row-combo--zipLookup">
            <div className="rf-form-layout-row-fields column small-12 large-6">
                <div className="row">
                    <div className="column large-12 small-12 rf-form-layout-field--zipLookup">
                        <div className="rf-form-layout-field">
                            <div className="rf-form-layout rf-form-layout-sublayout">
                                <div className="rf-form-layout-section rf-form-layout-section--postalCode">
                                    <div className="rf-form-layout-row rf-form-layout-row-combo--postalCode-and-zipLookupCityState-and-city-and-state">
                                        <div
                                            className="rf-form-layout-row-fields column small-12 large-12 form-textbox-sidebyside">
                                            <div className="row">
                                                <div
                                                    className="column large-6 small-12 rf-form-layout-field--postalCode">
                                                    <div className="rf-form-layout-field">
                                                        <div className="">
                                                            <div className={`form-textbox ${!props.zipCode.valid ? 'is-error' : ''}`}>
                                                                <input
                                                                    name="postalCode"
                                                                    type="tel"
                                                                    className="form-textbox-input form-textbox-entered"
                                                                    required
                                                                    minLength={3}
                                                                    defaultValue={props.zipCode.defaultValue}
                                                                    onChange={(event) => props.onZipCodeChange(event.target.value.trim())}
                                                                    disabled={props.disabled}
                                                                />
                                                                <span
                                                                    id="checkout.shipping.addressSelector.newAddress.address.zipLookup.postalCode_label"
                                                                    className="form-textbox-label"
                                                                    aria-hidden="true"
                                                                >
                                                                    {shop.language.general.customer.addresses.zip}
                                                                </span>
                                                                {!props.zipCode.valid &&
                                                                    <div className="form-message-wrapper">
                                                                        <span className="form-message">{props.zipCode.errorMessage}</span>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="column large-6 small-12 rf-form-layout-field--zipLookupCityState">
                                                    <div className="rf-form-layout-field">
                                                        <div className="form-dropdown">
                                                            <select
                                                                name="zipLookupCityState"
                                                                className={`form-dropdown-select ${!props.city.valid ? 'is-error' : ''}`}
                                                                required
                                                                defaultValue={props.city.defaultValue}
                                                                onChange={(event) => props.onCityChange(event.target.value)}
                                                                disabled={props.disabled}
                                                            >
                                                                {/* Perform with google maps Place API */}
                                                                <option value={'bolzano'}>Bolzano</option>

                                                            </select>
                                                            <span className="form-dropdown-chevron" aria-hidden="true"></span>
                                                            <span
                                                                className="form-dropdown-label"
                                                                id="checkout.shipping.addressSelector.newAddress.address.zipLookup.zipLookupCityState_label"
                                                                aria-hidden="true">
                                                                {shop.language.general.customer.addresses.city}
                                                            </span>
                                                            {!props.city.valid &&
                                                                <div className="form-message-wrapper">
                                                                    <span className="form-message">{props.city.errorMessage}</span>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormZipCodeCity;
