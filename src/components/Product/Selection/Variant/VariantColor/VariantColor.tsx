import React from "react";
import ColorPrimary from "./ColorPrimary/ColorPrimary";
import ColorSecondary from "./ColorSecondary/ColorSecondary";
import { ThemeVariantProps } from "../../../../../types/theme/theme-product-selection";

interface VariantColorProps{
    variant: ThemeVariantProps
}

const VariantColor: React.FC<VariantColorProps> = ({variant})=>{
    if(variant.type === 'primary') return <ColorPrimary variant={variant} />
    else return <ColorSecondary variant={variant} />
}

export default React.memo(VariantColor);