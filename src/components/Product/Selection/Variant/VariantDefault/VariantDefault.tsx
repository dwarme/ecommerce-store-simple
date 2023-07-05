import React from "react"
import DefaultPrimary from "./DefaultPrimary/DefaultPrimary"
import DefaultSecondary from "./DefaultSecondary/DefaultSecondary"
import { ThemeVariantProps } from "../../../../../types/theme/theme-product-selection"

interface VariantColorProps{
    variant: ThemeVariantProps
}

const VariantDefault: React.FC<VariantColorProps> = ({variant})=>{
    if(variant.type === 'primary') return <DefaultPrimary variant={variant} />
    return <DefaultSecondary variant={variant} />
}

export default VariantDefault;