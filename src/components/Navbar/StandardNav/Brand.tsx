import { ThemeStandardNavBrandProps } from "../../../types/theme/theme-standardnav";

const Brand: React.FC<ThemeStandardNavBrandProps> = ({name, link}) => {
    return (
        <div className="as-standardnav-title">
            <a 
                href={link} 
                className="localnav-title"
            >
                {name}
            </a>
        </div>
    )
}

export default Brand;