import gqlCartRequest from "./graphql/request/cart-request";
import gqlCustomerAddressRequest from "./graphql/request/customer-address-request";
import gqlCustomerRequest from "./graphql/request/customer-request";
import gqlOrderRequest from "./graphql/request/order-request";
import gqlProductRequest from "./graphql/request/product-request";
import gqlUserRequest from "./graphql/request/user-request";

const shopApi = {
    user: gqlUserRequest,
    product: gqlProductRequest,
    cart: gqlCartRequest,
    customer: gqlCustomerRequest,
    customerAddress: gqlCustomerAddressRequest,
    order: gqlOrderRequest
}

export default shopApi;