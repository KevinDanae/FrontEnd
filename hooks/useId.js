import React, { useEffect, useState } from "react";

const useId = (id) => {
  const [product, setProducts] = useState([]);
  const [review, setReview] = useState([]);

  const request = async () => {
    if(id !== undefined) {
      const data = await fetch(`https://wines-db.herokuapp.com/product/${id}`);
      const data2 = await fetch(`https://wines-db.herokuapp.com/reviews/${id}`);
      const info = await data.json();
      const info2 = await data2.json();
      setReview(info2)
      setProducts(info);
      console.log(info, info2);
    } else {
      return
    }
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
