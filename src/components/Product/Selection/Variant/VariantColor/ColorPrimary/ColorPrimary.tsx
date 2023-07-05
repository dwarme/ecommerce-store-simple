import React from "react"
import ColorPrimaryItem from "./ColorPrimaryItem"
import { ThemeVariantProps } from "../../../../../../types/theme/theme-product-selection"

interface ColorPrimaryProps {
    variant: ThemeVariantProps
}

const ColorPrimary: React.FC<ColorPrimaryProps> = ({ variant }) => {

    return (
        <div className="rf-flagship-collapsable">
            <div data-core-height-transition-wrapper="" className="r-height-transition-enter-done">
                <div data-core-height-transition-content="">
                    <div data-core-fade-transition-wrapper=""
                        className="rf-flagship-collapsable-dimension r-fade-transition-enter-done">
                        <div className="">
                            <div className="">
                                <fieldset
                                    className="rc-dimension rf-flagship-productselection-dimension rf-flagship-productselection-dimensioncolor">
                                    <legend>
                                        <h2 className="rf-flagship-productselection-dimension-header">Color</h2>
                                    </legend>
                                    <div className="rc-dimension-selector-group row form-selector-group-withgutters">

                                        {variant.options.map((option, idex) =>
                                            <ColorPrimaryItem
                                                key={`color-primary-${variant.id}-${idex}`}
                                                id={`color-primary-${variant.id}-${idex}`}
                                                variantOption={option}
                                                onClick={variant.onSelect}
                                            />
                                        )}

                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPrimary;