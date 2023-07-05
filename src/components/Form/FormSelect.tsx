import { ChangeEvent, ReactNode } from "react"

interface Props {
    title: string
    defaultValue?: string
    options: {
        value: string
        text: string
        checked?: boolean
    }[];
    required?: boolean
    onChange?: (text: string) => void
    disabled?: boolean
    error?: boolean
    message?: string
    children?: ReactNode
}

const FormSelect = (props: Props) => {

    const selectChangeHandle = (event: ChangeEvent<HTMLSelectElement>) => {
        if (props.onChange) props.onChange(props.options[event.target.selectedIndex].value)
    }

    return (
        <div className="form-row">
            <div className={`form-cell `}>
                <div className={`form-dropdown ${props.error ? ' is-error' : ''}`}>
                    <select
                        className={`form-dropdown-select`}
                        defaultValue={props.defaultValue}
                        onChange={selectChangeHandle}
                        disabled={props.disabled}
                        required={props.required}
                    >
                        {props.options?.map(option=>
                            <option key={`select-${option.value}`} value={option.value} defaultChecked={option.checked}>{option.text}</option>    
                        )}
                    </select>
                    <span className="form-dropdown-label">{props.title}</span>
                    {props.error && props.message &&
                        <div className="form-message-wrapper">
                            <span className="form-message">{props.message}</span>
                        </div>
                    }

                </div>
            </div>

            {props.children}
            
        </div>
    )
}

export default FormSelect;