import React from "react";
import Products from "../../components/Admin/Products";
import Sidebar from "../../components/Admin/Sidebar";

const products = () => {
  return (
    <>
      <Sidebar render={Products} />
    </>
  );
};

export default products;
