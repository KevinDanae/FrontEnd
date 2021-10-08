import React, { useEffect, useState } from "react";

const useAdmin = () => {
  const [orders, setOrders] = useState([]);

  const orderAndmin = async () => {
    try {
      const data = await fetch("https://wines-db.herokuapp.com/cart/admin");
      const info = await data.json();
      setOrders(info);
    } catch (error) {
      setOrders([]);
    }
  };

  useEffect(() => {
    orderAndmin();
  }, []);

  return { orders };
};

export default useAdmin;
