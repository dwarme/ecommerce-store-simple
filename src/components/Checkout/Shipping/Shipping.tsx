import { useSelector } from "react-redux";
import Form from "./Form";
import { ShopSliceState } from "../../../types/redux/shop-slice";

const Shipping: React.FC = ()=>{
    const customer = useSelector((state: {shop: ShopSliceState})=>state.shop.customer);
    return (
        <Form customer={customer}/>
    )
}

export default Shipping;