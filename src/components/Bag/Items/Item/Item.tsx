import { useState } from "react";
import useShop from "../../../../hooks/shop/useShop";
import { ThemeCartItemProps } from "../../../../types/theme/theme-cart";
import Price from "./Price";
import Quantity from "./Quantity";
import Remove from "./Remove";
import Title from "./Title";

const Item: React.FC<ThemeCartItemProps> = ({ cartItem }) => {
    const itemImage = cartItem.product?.images.filter(image=>image.variant_ids.includes(cartItem.variant_id))[0] ?? cartItem.product?.images[0];
    const variant = cartItem.product?.variants.filter(variant=>variant.id === cartItem.variant_id)[0] 
    const [isLoading, setLoading] = useState(false);
    const {
        shop, 
        cartItemRemove,
        cartItemUpdate
    } = useShop();

    const handleRemoveItem = async()=>{
        setLoading(true)
        const error = await cartItemRemove(cartItem.id)
        setLoading(false)
    }

    const handleUpdateQuantity = async(quantity: number)=>{
        setLoading(true);
        const error = await cartItemUpdate({
            id: cartItem.id,
            product_id: cartItem.product_id,
            variant_id: cartItem.variant_id,
            variant_option_id: cartItem.variant_option_id,
            quantity: quantity
        });
        setLoading(false);
    }

    return (
        <li className="rs-bag-item rs-iteminfo-wrap">
            <div className="rs-iteminfo row" >
                <div className="rs-iteminfo-image column large-3 small-12" aria-hidden="true">

                    <img
                        width="400"
                        height="400"
                        alt=""
                        src={itemImage?.src ?? ""}
                        className="as-util-relatedlink"
                    />

                </div>
                <div className="rs-iteminfo-content column large-9 small-12">
                    <div className="rs-iteminfo-details">

                        <Title 
                            title={cartItem.product?.title ?? ""}
                            link={`/product/${cartItem.product?.id}`}
                        />

                        <Quantity 
                            variantId={cartItem.variant_id}
                            quantityAvailable={10}
                            quantity={cartItem.quantity}
                            onChange={handleUpdateQuantity}
                            disabled={isLoading}
                        />

                        <Price price={`${shop.currency.simbol}${cartItem.cost.subtotal_amount}`}/>

                        <Remove onRemove={handleRemoveItem} loading={isLoading}/>

                    </div>
                    <div className="rs-bag-item-children"></div>
                </div>
            </div>
        </li>
    )
}

export default Item;