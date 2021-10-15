import { Pagination } from "@material-ui/core";
import React, { useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import Order from "../Order";

const Orders = () => {
  let { orders } = useAdmin();
  const pages = Math.ceil(orders.length / 5);
  const [page, setPage] = useState(0);

  const order = orders.slice(page, page + 5);

  const onHandleChange = (e, value) => {
    setPage(value * 5 - 5);
  };

  console.log(orders);
  return (
    <div>
      <div className="">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Order</th>
              <th>Status Order</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              order.map((e) => (
                <Order
                  name={e.user ? e.user.name : "Pruebas"}
                  order={e.createdAt}
                  status={e.state}
                  email="kevin.danaea@gmail.com"
                />
              ))}
          </tbody>
        </table>
        <div className="absolute right-14">
          <Pagination
            count={pages}
            shape="rounded"
            color="primary"
            onChange={onHandleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
