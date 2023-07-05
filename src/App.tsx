import './App.css';
import './css/fradisp/fradisp.css'
import './css/fradisp/fradisp.form.css'
import './css/fradisp/fradisp.standardnav.css'
import './css/fradisp/modal.css'
import './css/fradisp/fradisp.store.css'
import './css/fradisp/fradisp.attach.css'
import './css/fradisp/fradisp.store.bag.css'
import './css/fradisp/fradisp.store.checkout.css'
import ProductPage from './pages/product-page';
import useShop from './hooks/shop/useShop';
import { useEffect } from 'react';
import CheckoutShippingPage from './pages/checkout-shipping-page';
import CartPage from './pages/cart-page';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404-page';
import Home from './pages/home';
import CheckoutBillingPage from './pages/checkout-billing-page';

function App() {
  const { fetchCart, shop } = useShop();

  useEffect(() => {
    fetchCart()
  }, [fetchCart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path={shop.pathsUrl.home} element={<Home />} />
        <Route path={shop.pathsUrl.product} element={<ProductPage />} />
        <Route path={shop.pathsUrl.cart} element={<CartPage />} />
        <Route path={shop.pathsUrl.checkout.shipping} element={<CheckoutShippingPage />} />
        <Route path={shop.pathsUrl.checkout.billing} element={<CheckoutBillingPage />} />
        <Route path={shop.pathsUrl.customer.orders} element={<></>}/>
        <Route path={shop.pathsUrl.customer.orderDetails} element={<></>}/>
        <Route element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;