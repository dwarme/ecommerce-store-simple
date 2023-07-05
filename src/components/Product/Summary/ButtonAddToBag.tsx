import React, { useState } from "react";
import LoadingIndicator from "../../common/LoadingIndicator";
import { ThemeButtonAddToBagProps } from "../../../types/theme/theme-product-summary";
import useShop from "../../../hooks/shop/useShop";
import { useSelector } from "react-redux";
import { ShopSliceState } from "../../../types/redux/shop-slice";

const ButtonAddToBag: React.FC<ThemeButtonAddToBagProps> = ({title})=>{
    if(!title) title = "Add to Bag";

    const [loading, setLoading] = useState<boolean>(false)
    const {shop, cartItemAdd} = useShop();

    const variantColorOptionSelected = useSelector((state: { shop: ShopSliceState }) => state.shop?.variantColorOptionSelected)

    const handleAddToCart = async()=>{
        if(!variantColorOptionSelected) return;
        setLoading(true);
        const error = await cartItemAdd({
            product_id: variantColorOptionSelected.product_id,
            variant_id: variantColorOptionSelected?.variant_id,
            variant_option_id: variantColorOptionSelected?.id,
            quantity: 1,
        });

        if(!error) window.location.href = shop.pathsUrl.cart;
        setLoading(false)
    }

    return (
        <div className="rc-summary-button-box">
        <div className="rc-summary-button">
  
                <div className="as-purchaseinfo-button">
                    <span className="add-to-cart">

                        <button 
                            type="submit" 
                            className="button button-block" 
                            title={title}
                            onClick={handleAddToCart}
                            disabled={!variantColorOptionSelected}
                        >
                            {!loading &&
                                <span className="label">{title}</span>
                            }

                            {loading &&
                                <LoadingIndicator style={{height: '25px'}} />
                            }
                            
                        </button>

                    </span>
                </div>

        </div>
    </div>
    )
}

export default ButtonAddToBag;