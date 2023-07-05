import { useCallback, useMemo, useState } from "react"
import { AppAPIClientRequestErrorData } from "../../types/error"
import { 
    ICartLineInput, 
    ICartLineUpdateInput, 
    ICustomerAddress, 
    ICustomerUpdateInput, 
    IMailingAddressInput, 
    IProductListing 
} from "../../types"
import shopApi from "../../api"
import { GQLFieldsOptionalProduct, GQLFieldsOptionalsCustomer } from "../../types/api"
import {useDispatch} from 'react-redux'
import { shopSliceActions } from "../../store/shop-slice"
import { getShopData } from "../../utils/shop.util"

interface PayloadStatus{
    loading?: boolean,
    error?: AppAPIClientRequestErrorData,
}

interface ProductPayload extends PayloadStatus {
    data?: IProductListing
}

interface ProductListPayload extends PayloadStatus{
    data?: IProductListing[]
}

const useShop = ()=>{

    const [product, setProduct] = useState<ProductPayload>({loading: false})
    const [products, setProducts] = useState<ProductListPayload>({loading: false})
    const shopData = useMemo(()=> getShopData(), [] )
    const dispatch = useDispatch();

    const fetchCustomer = useCallback(async(fieldsOptional?: GQLFieldsOptionalsCustomer) =>{
        const {customer, error} = await shopApi.customer.retrieve(fieldsOptional)
        if(error) return error; 

        dispatch(shopSliceActions.setCustomer({customer}))

    },[dispatch])

    const createCustomer = useCallback(async(customerInput: ICustomerUpdateInput, fieldsOptional?: GQLFieldsOptionalsCustomer)=>{
        const {customer, error} = await shopApi.customer.create(customerInput, fieldsOptional);
        if(error) return error; 

        dispatch(shopSliceActions.setCustomer({customer}))

    }, [dispatch])

    const updateCustomer = useCallback(async(customerInput: ICustomerUpdateInput, fieldsOptional?: GQLFieldsOptionalsCustomer)=>{
        const {customer, error} = await shopApi.customer.update(customerInput, fieldsOptional);
        if(error) return error; 

        dispatch(shopSliceActions.setCustomer({customer}))

    }, [dispatch])

    const createCustomerAddress = useCallback(async(addressInput: IMailingAddressInput)=>{
        const {address, error} = await shopApi.customerAddress.create(addressInput);
        if(error) return error; 
    }, []);

    const updateCustomerAddress = useCallback(async(addressInput: ICustomerAddress)=>{
        const {address, error} = await shopApi.customerAddress.update(addressInput);
        if(error) return error;
    }, [])

    const fetchProduct = useCallback(async(id: number, fieldsOptional?: GQLFieldsOptionalProduct)=>{
        setProduct({loading: true})
        
        const {product, error} = await shopApi.product.retrieve(id, fieldsOptional)
        if(error) {
            setProduct({loading: false, error})
            return error;
        }

        setProduct({loading: false, error: undefined, data: product});
        
        dispatch(shopSliceActions.setProduct({product: {
            title: product.title,
            quantitySelected: 1,
            price: product.variants.length ? `${shopData.currency.simbol}${product.variants[0].price}` : ""
        }}))

    }, [dispatch, shopData.currency])

    const fetchProducts = useCallback(async(fieldsOptional?: GQLFieldsOptionalProduct)=>{
        setProducts({loading: true});
        const {products, error} = await shopApi.product.list(fieldsOptional);

        if(error){
            setProducts({loading: false, error});
            return error;
        }

        setProducts({loading: false, error: undefined, data: products})

    }, [])

    const fetchCart = useCallback(async()=>{
        const {cart, error} = await shopApi.cart.retrieve();
        if(error) return error;

        dispatch(shopSliceActions.setCart({cart}))

    }, [dispatch])

    const cartItemAdd = useCallback(async(item: ICartLineInput)=>{
        const {cart, error} = await shopApi.cart.lines.add([item]);
        if(error) return error;

        dispatch(shopSliceActions.setCart({cart}))

    }, [dispatch])

    const cartItemUpdate = useCallback(async(item: ICartLineUpdateInput)=>{
        const {cart, error} = await shopApi.cart.lines.update([item]);
        if(error) return error;
        
        dispatch(shopSliceActions.setCart({cart}))

    }, [dispatch])

    const cartItemRemove = useCallback(async(itemId: number)=>{
        const {cart, error} = await shopApi.cart.lines.remove([itemId]);
        if(error) return error;

        dispatch(shopSliceActions.setCart({cart}))

    },[dispatch])

    return{
        fetchCustomer,
        createCustomer,
        updateCustomer,
        createCustomerAddress,
        updateCustomerAddress,
        fetchProduct,
        fetchProducts,
        cartItemAdd,
        cartItemUpdate,
        cartItemRemove,
        fetchCart,
        product,
        products,
        shop: shopData,
    }
}

export default useShop;