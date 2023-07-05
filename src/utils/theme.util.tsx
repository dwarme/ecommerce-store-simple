import {  IProductListing } from "../types"
import { ThemeBuystripProps, ThemeProductData, ThemeProductHeaderProps } from "../types/theme/theme-product"
import { ThemeGalleryProps } from "../types/theme/theme-product-gallery"
import { ThemeProductSelectionProps } from "../types/theme/theme-product-selection"
import { ThemeProductSummaryProps } from "../types/theme/theme-product-summary"
import { ThemeStandardNavProps } from "../types/theme/theme-standardnav"
import { getShopData } from "./shop.util"

function themeConfigStandardNav(): ThemeStandardNavProps{
    const shop = getShopData();
    return {
        brand: {
            name: shop.name,
            link: shop.wwwDomain
        },
        menu: {
            links: [
                {title: 'Collection', link: shop.pathsUrl.collection}
            ],
            bag:{
                link: shop.pathsUrl.cart
            }
        }
    }
}

function themeConfigProduct(product: IProductListing): ThemeProductData {
    const themeProductHeader: ThemeProductHeaderProps = {
        productName: product.title
    }

    const themeProductSelection: ThemeProductSelectionProps = {
        variants: product.variants.map(variant => ({
            id: variant.id,
            name: variant.title.toLowerCase(),
            title: variant.title,
            type: 'primary',
            options: variant.options
        })),
    }
    
    const themeProductSummary: ThemeProductSummaryProps = {
        data: {
            price: "",
            quotes: {
                dude: {
                    title: 'Ships',
                    delivery: {
                        message: '1 business day',
                        promo: product.shipping_rate.price === 0 ? 'Free shipping' : undefined
                    }
                }
            },
            buttonAddToBag: {
                title: 'Add to Bag'
            }
        }
    }

    const themeProductGallery: ThemeGalleryProps = {
        gallery: {
            primary: {
                images: product.images
            }
        }
    }

    const themeBuystrip: ThemeBuystripProps ={
        data: {
            buystripDelivery: product.shipping_rate.price === 0 ? {} : undefined,
            buystripReturn: {}
        }
    }

    const themeProduct: ThemeProductData = {
        header: themeProductHeader,
        selection: themeProductSelection,
        summary: themeProductSummary,
        gallery: themeProductGallery,
        buystrip: themeBuystrip
    }

    return themeProduct
}

export const themeConfig = {
    standardNavProps: themeConfigStandardNav,
    productProps: themeConfigProduct,
}