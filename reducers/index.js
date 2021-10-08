const initialState = {
  products: [],
  category: "",
  cart: [],
  token: "",
  checkoutMercadoPago: "",
  checkoutPaypal: "",
  purchases: "",
  userData: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        purchases: action.payload,
      };
    case "PURCHASES":
      return {
        ...state,
        purchases: action.payload,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        products: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
      };
    case "ADD_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "GET_PRODUCT_CATEGORY":
      return {
        ...state,
        products: action.payload,
      };
    case "REMOVE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "LOGIN": 
      return {
        ...state,
        token: action.payload,
      };
    case "CHECKOUT_MERCADO_PAGO":
      return {
        ...state,
        checkoutMercadoPago: action.payload,
      }
      default:
      return state;
    case "CHECKOUT_PAYPAL":
      return {
        ...state,
        checkoutPaypal: action.payload,
      }
  }
};

export default rootReducer;
