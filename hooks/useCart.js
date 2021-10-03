const useCart = async () => {
  let cart = localStorage.getItem("cart");
  const userId = localStorage.getItem("userId");
  if (cart && cart.length) {
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
    console.log(data);
    if (data.cartdb) {
      localStorage.removeItem("cart");
      localStorage.setItem("idCart", data.cartdb.id);
      //   setCart(products);
    }
  } else {
    const response = await fetch("https://wines-db.herokuapp.com/cart", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.newCart) {
      localStorage.setItem("idCart", data.newCart.id);
      //   setCart(products);
    }
  }
};

export default useCart;
