import React from 'react'

const useActionCart = async (idProduct, action) => {
    const id = localStorage.getItem("idCart");
    if(id) {
        const response = await fetch(`https://wines-db.herokuapp.com/cart?id=${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
            idProduct,
          }),
        });
        const data = await response.json();
        console.log(data);
        return data
    } else {
        console.log('No hay carrito aun');
    }
}

export default useActionCart
