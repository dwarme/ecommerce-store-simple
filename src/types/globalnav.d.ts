export interface GlobalNavData{
    brand: BrandProps;
    links: MenuLink[]
    search?: SearchProps
    bag?: BagProps
}

export interface GlobalNavProps{
    data: GlobalNavData
}

export interface BrandProps {
    name: string;
    link: string;
    logo: {
        regular: ReactNode
        compact?: ReactNode
    }
};

export interface MenuLink {
    id: string;
    name: string;
    title: string;
    url: string;
    ariaLabel?: string;
    images: {
        name: 'regular' | 'compact'
        assetInline: ReactNode
    }[];

    submenu?: {
        ariaLabel: string;
        title: string;
        group: {
            name: string;
            ariaLabel?: string
            title: string
            links: {
                title: string;
                url: string;
                ariaLabel: string;
            }[]
        }[]
    }
}

export interface SearchProps {
    form: {
        action: string
        placeholder?: string
    }

    results: {
        link: string
        title: string;
    }[]
}

export interface BagProps {
    data: {
        itemsLoading?: boolean
        link: {
            url: string
            ariaLabel?: string
        }
        title?: string
        items: {
            product: {
                link: string
                image: ProductImage,
                name: string
            }
        }[];

        navItems: {
            link: string
            title: string
            icon: ReactNode
        }[]
    }
}