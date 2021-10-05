import React from "react";
import Link from "next/link";

const Product = ({ img, product, stock, price, description, brand, id }) => {
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
                <img src={img} alt="Avatar Tailwind CSS Component" />
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
          <Link
            href={`/dashboard/add?name=${product}&stock=${stock}&price=${price}&description=${description}&brand=${brand}&id=${id}`}
          >
            <p className="btn btn-ghost btn-xs">Edit</p>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default Product;
