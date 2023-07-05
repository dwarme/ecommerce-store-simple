import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ShopSliceState } from "../../../types/redux/shop-slice";

interface PriceProps {
    price: string
}

const Price: React.FC<PriceProps> = ({ price }) => {
    const reduxProductData = useSelector((state: {shop: ShopSliceState})=> state.shop.product);
    const productPrice = useMemo(()=>{
        if(!reduxProductData) return "";
        return reduxProductData.price;
    }, [reduxProductData])

    return (
        <>
            <div className="rc-summary-price-box">
                <div className="rc-prices rc-prices-lead-with-full-price">
                    <div className="rc-price">
                        <div className="rc-prices-currentprice">
                            <span className="rc-prices-fullprice" data-autom="full-price">{productPrice}</span>
                        </div>
                    </div>
                    <div className="rc-prices-footer"></div>
                </div>
            </div>
            <div className="rf-third-party-below-price"></div>
        </>
    )
}

export default Price;