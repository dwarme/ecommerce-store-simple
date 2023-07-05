import React from "react";
import Menu from "./Menu/Menu";
import Title from "./Brand";
import { ThemeStandardNavProps } from "../../../types/theme/theme-standardnav";

const StandardNav: React.FC<ThemeStandardNavProps> = ({menu, brand}) => {
    return (
        <>
            <input type="checkbox" id="as-standardnav-menustate" className="as-standardnav-menustate"></input>

            <nav
                id="as-standardnav"
                className="as-standardnav as-standardnav-scrim css-sticky"
                role="navigation"
                aria-label="Local"
            >
                <div className="as-standardnav-wrapper">
                    <div className="as-standardnav-background"></div>
                    <div className="as-standardnav-content">

                        <Title {...brand} />
                        <Menu {...menu}/>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default StandardNav;