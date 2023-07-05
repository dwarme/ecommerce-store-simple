import React from "react";
import Quantity from "./Quantity/Quantity";
import VariantColor from "./Variant/VariantColor/VariantColor";
import VariantDefault from "./Variant/VariantDefault/VariantDefault";
import { ThemeProductSelectionProps } from "../../../types/theme/theme-product-selection";


const Selection: React.FC<ThemeProductSelectionProps> = ({ variants, quantity }) => {
    return (
        <div className="rf-flagship-productselection">
            {quantity &&
                <Quantity />
            }

            {variants.map(variant => {
                if (variant.name === 'color') {
                    return  <VariantColor variant={variant} />
                }

                return <VariantDefault variant={variant} />
            })}

        </div>
    )
}

export default React.memo(Selection);