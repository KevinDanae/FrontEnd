import { cartGet } from "../helpers/cart";

const useCart = async () => {

  let cart = localStorage.getItem("cart");
  const userId = localStorage.getItem("userId");
  if (cart) {
    cart = JSON.parse(cart);
    const products = cart.map((e) => {
      return {
        productId: e.id,
        quantity: e.quantity,
      };
    });

    const response = await fetch("https://wines-db.herokuapp.com/cart", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        products,
      }),
    });
    const data = await response.json();
    if (data.cartdb) {
      localStorage.removeItem("cart");
      localStorage.setItem("idCart", data.cartdb.id);
      //   setCart(products);
    }
  } 
};

export default useCart;
