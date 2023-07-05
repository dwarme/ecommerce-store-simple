import { useMemo } from "react";
import { themeConfig } from "../utils/theme.util";

const useTheme = ()=>{
    const standardNavProps = useMemo(()=>themeConfig.standardNavProps(), [])

    return {
        standardNavProps
    }
}

export default useTheme;