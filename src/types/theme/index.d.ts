import { ThemeGlobalNavData } from "./theme-globalnav"
import { ThemeProductData } from "./theme-product"

export interface ThemeProps{
    globalNavData: ThemeGlobalNavData
    productData?: ThemeProductData
    wwwDomain: string
    pathsUrl: {
        home: string
        product: string
        bag: string
        checkout: string | null
        collection: string
        customer: {
            orders: string
            orderDetails: string
        },
        policy: {
            privacy?: string,
            terms?: string,
        }
    }
}

