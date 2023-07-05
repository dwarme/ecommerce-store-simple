import React from "react"
import { ThemeVariantOption } from "../../../../../../types/theme/theme-product-selection"

interface ColorPrimaryItemProps {
    id: string
    variantOption: ThemeVariantOption
    defaultChecked?: boolean
    onClick?: (value: string)=>void
}

const ColorSecondaryItem: React.FC<ColorPrimaryItemProps> = ({ id, variantOption, defaultChecked, onClick }) => {
    const handleOptionClick= ()=>{
        if(onClick) onClick(variantOption.value)
    }

    return (
        <li className="colornav-item">
            <input
                type="radio"
                id={id}
                className="colornav-value rc-dimension-colornav-input rf-bfe-product-dimension-colornav-input"
                name="dimensionColor"
                value={variantOption.value}
                defaultChecked={defaultChecked}
            />
            <label
                htmlFor={id}
                className="colornav-link rc-dimension-colornav-link rf-bfe-product-dimension-colornav-label"
                onClick={handleOptionClick}
            >
                <img
                    alt={variantOption.name}
                    src={variantOption.value}
                    className="colornav-swatch"
                />
                <span className="colornav-label">{variantOption.name}</span>
            </label>
        </li>
    )
}

export default ColorSecondaryItem