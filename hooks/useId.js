import React, { useEffect, useState } from "react";

const useId = (id) => {
  const [product, setProducts] = useState([]);
  const [review, setReview] = useState([]);

  const request = async () => {
    const data = await fetch(`https://wines-db.herokuapp.com/product?id=${id}`);
    const data2 = await fetch(`https://wines-db.herokuapp.com/reviews/${id}`);
    const info = await data.json();
    const info2 = await data2.json();
    setReview(info2)
    setProducts(info);
  };

  useEffect(() => {
    request();
  }, [id]);

  return {
      product,
      review
  }
};

export default useId;
