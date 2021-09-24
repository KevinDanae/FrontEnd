import React, { useEffect, useState } from "react";

const useId = (id) => {
  const [product, setProducts] = useState([]);

  const request = async () => {
    const data = await fetch(`https://wines-db.herokuapp.com/product?id=${id}`);
    const info = await data.json();
    setProducts(info);
  };
    console.log(product)

  useEffect(() => {
    request();
  }, [product, request]);

  return {
      product
  }
};

export default useId;
