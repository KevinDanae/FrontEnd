import React from "react";
import useCart from "./useCart";

const useActionCart = async (idProduct, action, payment) => {
  const id = localStorage.getItem("idCart");
  if (id) {
    if (idProduct) {
      const response = await fetch(
        `https://wines-db.herokuapp.com/cart?id=${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
            idProduct,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } else if (action === "cancelled") {
      const response = await fetch(
        `https://wines-db.herokuapp.com/cart?id=${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      localStorage.removeItem("idCart");
      useCart();
      return data;
    } else {
      const response = await fetch(
        `https://wines-db.herokuapp.com/cart?id=${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
            payment_method: 'stripe',
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      localStorage.removeItem("idCart");
      return data;
    }
  } else {
    console.log("No hay carrito aun");
  }
};

export default useActionCart;
