const initialState = {
  products: [],
  category: "",
  cart: [],
  token: "",
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
      default:
      return state;
  }
};

export default rootReducer;
