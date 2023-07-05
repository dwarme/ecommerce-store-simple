import { IProductVariantOption } from "..";

interface ThemeVariantOption extends IProductVariantOption{ }

type onChange = (value: strint)=>void

export interface ThemeVariantProps{
    id: string | number;
    name: string;
    title: string;
    type:  'primary' | 'secondary';
    options: ThemeVariantOption[];
    onSelect?: onChange;
}

export interface ThemeQuantityProps{
    id: string;
    name: string;
    title: string;
    available: number;
    onChange: onChange
}

export interface ThemeProductSelectionProps{

    variants: ThemeVariantProps[]
    quantity?: ThemeQuantityProps

}