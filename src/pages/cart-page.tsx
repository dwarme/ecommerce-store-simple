import React, { useMemo } from "react";
import Bag from "../components/Bag/Bag";
import { themeConfig } from "../utils/theme.util";
import StandardNav from "../components/Navbar/StandardNav/StandardNav";

const CartPage: React.FC = () => {

    const standardNavProps = useMemo(() => themeConfig.standardNavProps(), [])
    return (
        <React.Fragment>
            <StandardNav {...standardNavProps} />
            <Bag />
        </React.Fragment>
    )
}

export default CartPage;