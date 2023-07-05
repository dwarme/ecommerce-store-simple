import { ReactNode } from "react";

export type PriceProps = string;

export interface QuoteAvailabilityProps{
    svgIcon: ReactNode;
    title?: string;
    text: string;
}

export interface QuoteDudeProps {
    title?: string
    delivery:{
        message: string;
        promo: string;
    }
}

export interface QuotesProps{
    availability: QuoteAvailabilityProps
    dude: QuoteDudeProps
}

export interface ButtonProps{
    title?: string;
    onClick: ()=>void;
    disable?: boolean;
}

export interface SaveProps{

}

export interface FooterNotesProps{
    title: string;
    text: string
}

export interface SummaryProps{
    data: {
        price: string;
        quotes: QuotesProps
        button: ButtonProps
        save: SaveProps
        footerNotes: FooterNotesProps
    }
}