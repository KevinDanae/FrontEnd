import { Pagination } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions";
import Product from "../Product";

const Products = () => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.products);
  const pages = Math.floor(state.length / 5);
  const [page, setPage] = useState(0);

  state = state.slice(page, page + 5);

  const onHandleChange = (e, value) => {
    setPage(value * 5);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state &&
              state.map((e) => (
                <Product
                  key={e.id}
                  id={e.id}
                  img={e.picture}
                  product={e.name}
                  stock={e.stock}
                  price={e.price}
                  description={e.description}
                  brand={e.brand}
                />
              ))}
          </tbody>
        </table>
        <div className="absolute right-14">
          <Pagination count={pages} shape="rounded" color="primary" onChange={onHandleChange} />
        </div>
      </div>
    </>
  );
};

export default Products;
