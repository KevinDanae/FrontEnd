import React from "react";

const Product = ({ img, product, stock, price }) => {
  

  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{product}</div>
            </div>
          </div>
        </td>
        <td>
          ${price}
          <br />
        </td>
        <td>{stock}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Edit</button>
        </th>
      </tr>
    </>
  );
};

export default Product;
