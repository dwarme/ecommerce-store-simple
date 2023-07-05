import React, { useEffect, useMemo } from "react";
import useShop from "../hooks/shop/useShop";
import { themeConfig } from "../utils/theme.util";
import Product from '../components/Product/Product';
import Theme from '../components/UI/Theme'
import useTheme from "../hooks/useTheme";
import StandardNav from "../components/Navbar/StandardNav/StandardNav";
import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {

  const { standardNavProps } = useTheme();
  const { fetchProduct, product } = useShop();
  const params = useParams();

  const themeProductData = useMemo(() => {
    if (product.data) return themeConfig.productProps(product.data);
    return null;
  }, [product])

  useEffect(() => {
    if(params){
      const {productId} = params;
      fetchProduct(
        parseInt(productId as string), 
        { 
          images: true, 
          image: true, 
          variants: true, 
          shippingRate: true 
        })
    }
  }, [fetchProduct, params])

  return (
    <Theme>
      <StandardNav {...standardNavProps} />

      {themeProductData &&
        <Product data={themeProductData} />
      }
    </Theme>
  )

}

export default ProductPage