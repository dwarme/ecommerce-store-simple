import { useSelector } from "react-redux";
import { ShopSliceState } from "../../types/redux/shop-slice";
import Header from "./Header";
import Price from "./Summary/Price/Price";
import useShop from "../../hooks/shop/useShop";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import Items from "./Items/Items";

const Bag: React.FC = () => {

    const { shop } = useShop();
    const cart = useSelector((state: {shop: ShopSliceState})=>state.shop.cart);

    return (
        <div className="rs-bag">
            <div className="rs-bag-content as-l-container rs-zoom-content">
                <Header 
                    title="Cart title" 
                    subtitle="Free delivery and free returns."
                />
                {cart &&
                    <>
                        <Items cartItems={cart.line_items} />
                        <Price
                            price={{
                                total: `${shop.currency.simbol}${cart.cost?.total ?? 0}`,
                                subtotal: `${shop.currency.simbol}${cart.cost?.subtotal ?? 0}`,
                                shippingFee: `${shop.currency.simbol}${cart.cost?.total_duty ?? 0}`
                            }}
                        />
                    </>
                }

                {!cart &&
                    <LoadingSpinner />
                }
            </div>
        </div>
    )
}

export default Bag;