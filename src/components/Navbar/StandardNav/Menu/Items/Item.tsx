import { ThemeStandardNavMenuLink } from "../../../../../types/theme/theme-standardnav";

const Item: React.FC<ThemeStandardNavMenuLink> = ({title, link}) => {
    return (
        <li className="as-standardnav-menu-item">
            <a href={link}
                className="as-standardnav-menu-link"
            > 
                {title}
            </a>
        </li>
    )
}

export default Item;