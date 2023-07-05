import { ThemeStandardNavMenuProps } from "../../../../types/theme/theme-standardnav";
import Bag from "./Bag/Bag";
import Items from "./Items/Items";

const Menu: React.FC<ThemeStandardNavMenuProps> = ({links, bag, actionButton}) => {

    return (

        <div className="as-standardnav-menu">
            <div className="as-standardnav-menu-tray">
                <Items items={links}/>
            </div>
            <div className="as-standardnav-actions">
                <div className="as-standardnav-action as-standardnav-action-menucta" aria-hidden="true">
                    <label htmlFor="as-standardnav-menustate" className="as-standardnav-menucta">
                        <span className="as-standardnav-menucta-chevron"></span>
                    </label>
                </div>
                {bag &&
                    <Bag {...bag} />
                }
            </div>
        </div>

    )
}

export default Menu;