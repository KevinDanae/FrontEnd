const initialState = {
  profile: {},
  products: [],
  category: "",
  cart: [],
  token: "",
  checkoutMercadoPago: "",
  checkoutPaypal: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case 'PROFILEGOOGLE':
      return{
        ...state,
        profile: action.payload,
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
