export interface ThemeStandardNavProps{
    brand: ThemeStandardNavBrandProps;
    menu: ThemeStandardNavMenuProps;
}

export interface ThemeStandardNavBrandProps{
    name: string;
    link: string;
}

export interface ThemeStandardNavMenuLink{
    title: string;
    link: string;
}
export interface ThemeStandardNavMenuProps{
    links: ThemeStandardNavMenuLink[];
    bag?: {
        link: string
    }
    actionButton?: ThemeStandardNavMenuLink
}