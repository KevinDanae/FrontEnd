import React from "react";
import Order from "../Order";

const Orders = () => {
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
            <Order name='Kevin' order='123456ABCDE' status='Pagado' email='kevin.lovo@gmail.com' />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
