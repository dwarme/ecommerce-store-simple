import { IProductImageListing } from ".."
import { ThemeBuystripProps } from "./theme-product"


export interface ThemeGalleryProps{
    buystrip?: ThemeBuystripProps
    gallery: {
        primary?: ThemeGalleryPrimaryProps
        secondary?: ThemeGallerySecondaryProps
    }
}

export interface ThemeGalleryPrimaryProps{
    images: IProductImageListing[]
}

export interface ThemeGallerySecondaryProps{

}