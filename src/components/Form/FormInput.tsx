import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { debounce } from "../../utils/global.util"

interface Props{
    type: 'text' | 'password' | 'email' | 'number'
    name?: string
    label: string
    defaultValue?: string
    value?: string
    required?: boolean
    onChange?: (text: string) => void
    disabled?: boolean
    error?: boolean
    message?: string
    supplementalInfo?: string
    minLength?: number
    maxLength?: number
}

const FormInput = (props: Props) => {
    const [textEntered, setTextEntered] = useState<string>(props.defaultValue || '')

    const inputChangeHandle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim();
        setTextEntered(text)
        if (props.onChange) props.onChange(text)
    }, [props])


    const debounceInput = useMemo(()=>debounce(inputChangeHandle, 300), [inputChangeHandle])

    const inputClassName = `${textEntered?.length > 0 ? 'form-textbox-entered' : ''}`;

    return (
        <div className="rf-form-layout-row">
            <div className="rf-form-layout-row-fields column small-12 large-6">
                <div className="row">
                    <div className="column large-12 small-12">
                        <div className="rf-form-layout-field">
                            <div className="">
                                <div className={`form-textbox ${props.error ? ' is-error' : ''}`}>
                                    <input
                                        type={props.type as string}
                                        name={props.name}
                                        className={`form-textbox-input ${inputClassName}`}
                                        defaultValue={props.defaultValue}
                                        value={props.value}
                                        onChange={(ev)=>debounceInput(ev)}
                                        disabled={props.disabled}
                                        required={props.required}
                                        autoCapitalize={'off'}
                                        autoComplete={'off'}
                                        autoCorrect={'off'}
                                        spellCheck={'false'}
                                        minLength={props.minLength}
                                        maxLength={props.maxLength}
                                    />

                                    <span className="form-textbox-label">{props.label}</span>

                                    {props.error && props.message &&
                                        <div className="form-message-wrapper">
                                            <span className="form-message">{props.message}</span>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.supplementalInfo &&
                <div className="rf-form-layout-row-message column small-12 large-6">
                    <div 
                        className="as-supplementalinfo"
                        id="checkout.shipping.addressContactEmail.address.emailAddress-fieldMessage"
                    >
                        {props.supplementalInfo}
                    </div>
                </div>
            }
        </div>
    )

}

export default FormInput;