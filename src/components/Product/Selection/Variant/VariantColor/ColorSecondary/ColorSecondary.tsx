import React from "react"
import ColorSecondaryItem from "./ColorSecondaryItem";
import { ThemeVariantProps } from "../../../../../../types/theme/theme-product-selection";

interface ColorSecondaryProps {
    variant: ThemeVariantProps
}

const ColorSecondary: React.FC<ColorSecondaryProps> = ({ variant }) => {
    return (
        <div
            className="rf-bfe-step rf-bfe-focused-step rf-bfe-step-complete rf-bfe-right-rail-step rf-bfe-dimension rf-bfe-dimension-dimensioncolor"
            aria-hidden="false"
        >
            <h2 id="dimensionColor" className="typography-eyebrow" >
                <span className="as-subheading">Pick your favorite.</span>
            </h2>

            <div
                className="colornav rc-dimension-colornav rf-bfe-product-dimension-group"
                role="group"
                aria-labelledby="dimensionColor"
            >
                <div className="rf-bfe-product-dimension-colornav-header">Color - Blue</div>
                <ul className="colornav-items">

                    {variant.options.map((option, idex) =>
                        <ColorSecondaryItem 
                            key={`color-secondary-${variant.id}-${idex}`}
                            id={`color-secondary-${variant.id}-${idex}`}
                            variantOption={option}
                            onClick={variant.onSelect}
                        />
                    )}

                </ul>
            </div>
        </div>
    )
}

export default ColorSecondary;