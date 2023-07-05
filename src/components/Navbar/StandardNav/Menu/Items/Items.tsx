import { ThemeStandardNavMenuLink } from "../../../../../types/theme/theme-standardnav";
import Item from "./Item";

const Items: React.FC<{items: ThemeStandardNavMenuLink[]}> = ({items}) => {
    return (
        <ul className="as-standardnav-menu-items">
            {items.map(item=>
                <Item {...item}/>
            )}
            
        </ul>
    )
}

export default Items;