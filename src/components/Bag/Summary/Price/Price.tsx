import useShop from "../../../../hooks/shop/useShop";
import { ThemeCartSummaryProps } from "../../../../types/theme/theme-cart";
import ButtonContinue from "../../ButtonContinue";
import Shipping from "./Shipping";
import Subtotal from "./Subtotal";
import Total from "./Total";

const Price: React.FC<ThemeCartSummaryProps> = ({price})=>{

    const {shop} = useShop();

    return (
      <div className="rs-summary ">
        <div className="large-9 large-offset-3 small-12 small-offset-0">
          <Subtotal subtotal={price.subtotal} />
          <Shipping shippingFee={price.shippingFee}/>
          <Total total={price.total} />
          <ButtonContinue title="Checkout" link={shop.pathsUrl.checkout.fulfillment } />
        </div>
      </div>
    );
}

export default Price;