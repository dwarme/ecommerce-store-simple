import { ReactNode } from "react";
import { ThemeGalleryProps } from "./theme-product-gallery";
import { ThemeProductSelectionProps } from "./theme-product-selection";
import { ThemeProductSummaryProps } from "./theme-product-summary";

export interface ThemeProductData {
    header: ThemeProductHeaderProps;
    selection: ThemeProductSelectionProps;
    summary: ThemeProductSummaryProps;
    gallery: ThemeGalleryProps;
    buystrip?: ThemeBuystripProps
}

export interface ThemeProductProps{
    data: ThemeProduct
}

export interface ThemeProductHeaderProps {
    note?: string;
    productName: string;
}

export interface ThemeBuystripProps {
    data: {
        buystripDelivery?: {
            title?: string
        }

        buystripReturn?: {
            title?: string;
        }

        items?: {
            name: string;
            icon: ReactNode;
            title: string
        }[]
    }
}
