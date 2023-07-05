export type ThemePriceProps = string;

export interface ThemeQuoteAvailabilityProps{
    svgIcon: ReactNode;
    title?: string;
    text: string;
}

export interface ThemeQuoteDudeProps {
    title?: string
    delivery:{
        message: string;
        promo?: string;
    }
}

export interface ThemeQuotesProps{
    availability?: ThemeQuoteAvailabilityProps
    dude?: ThemeQuoteDudeProps
}

export interface ThemeButtonAddToBagProps{
    title?: string;
}

export interface ThemeSaveProps{

}

export interface ThemeProductSummaryProps{
    data: {
        price: string;
        quotes?: ThemeQuotesProps
        buttonAddToBag?: ThemeButtonAddToBagProps
    }
}