interface VariantOption{
    title: string;
    value: string;
    note?: string
}

type onChange = (value: string)=>void

export interface VariantProps{
    id: string;
    name: string
    title: string;
    type:  'primary' | 'secondary'
    options: VariantOption[]
    onOptionSelect?: onChange
}
/*
export interface VariantColorProps{
    id: string;
    name: string;
    title: string;
    type: 'primary' | 'secondary';
    options: VariantOption[]
    onOptionSelect?: onChange
}*/

export interface QuantityProps{
    id: string;
    name: string;
    title: string;
    available: number;
    onChange: onChange
}

export interface SelectionProps{

    variants: VariantProps[]
    quantity?: QuantityProps

}