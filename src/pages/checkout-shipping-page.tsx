import React from "react";
import Shipping from "../components/Checkout/Shipping/Shipping";
import useTheme from "../hooks/useTheme";
import StandardNav from "../components/Navbar/StandardNav/StandardNav";
import Theme from "../components/UI/Theme";

const CheckoutShippingPage: React.FC = () => {
    const { standardNavProps } = useTheme();
    return (
        <Theme >
            <StandardNav {...standardNavProps} />
            <Shipping />
        </Theme>
    )
}

export default CheckoutShippingPage;