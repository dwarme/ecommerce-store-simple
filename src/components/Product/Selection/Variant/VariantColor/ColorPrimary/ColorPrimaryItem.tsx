import React from "react"
import { ThemeVariantOption } from "../../../../../../types/theme/theme-product-selection"
import { useDispatch } from "react-redux"
import { shopSliceActions } from "../../../../../../store/shop-slice"

interface ColorPrimaryItemProps{
    id: string
    variantOption: ThemeVariantOption
    defaultChecked?: boolean
    onClick?: (value: string)=>void
}

const ColorPrimaryItem: React.FC<ColorPrimaryItemProps> = ({id, variantOption, defaultChecked, onClick})=>{
    
    const dispatch = useDispatch();

    const handleOptionClick= ()=>{
        if(onClick) onClick(variantOption.value);
        dispatch(shopSliceActions.setVariantColorSelected({
            variantOption
        }))
    }

    return (
        <div className="rc-dimension-multiple form-selector-swatch column large-6 small-6 form-selector">
        <input 
            className="form-selector-input"
            name="dimensionColor"
            id={id}
            type="radio"
            defaultChecked={defaultChecked}
            value={variantOption.value} 
        />
        <label
            htmlFor={id}
            className="form-selector-label"
            id={`${id}__label`}
            onClick={handleOptionClick}>
            
            <img
                alt={variantOption.name}
                src={variantOption.value}
                className="form-selector-swatch"
            />
            <span className="form-label-small"></span>
            <span className="form-label-small">
                {variantOption.name}
                {variantOption.note && 
                    <span className="violator-frameless violator-frameless-reduced">{variantOption.note}</span>
                }
            </span>

        </label>
    </div>
    )
}

export default ColorPrimaryItem;