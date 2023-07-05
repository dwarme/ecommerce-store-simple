import { ThemeCartItemsProps } from "../../../types/theme/theme-cart";
import Item from "./Item/Item";

const Items: React.FC<ThemeCartItemsProps> = ({cartItems})=>{
    return(
        <ol className="rs-bag-items rs-iteminfos">
            {cartItems.map(item=> 
                <Item cartItem={item}/>
            )}
        </ol>
    )
}

export default Items;