import React, { useState } from "react";

const Order = ({ name, email, order, status }) => {
  const [stat, setStat] = useState(status);

  const onHandleChange = (e) => {
    setStat(e.target.innerHTML);
    onHandleSubmit(e);
  };

  const onHandleSubmit = async (e) => {
    const response = await fetch("https://wines-db.herokuapp.com/mail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message: `Notificacion de tu orden: Tu orden: ${order} ha sido ${e.target.innerHTML}`,
      }),
    });

    const data = await response.json();
  };

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
                  src="https://i.pravatar.cc/500?img=41"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Wines
          <br />
          <span className="badge badge-outline badge-sm">{order}</span>
        </td>
        <td
          className={stat === "Cancelado" ? "text-red-500" : "text-green-500"}
        >
          {stat}
        </td>
        <th>
          <div className="dropdown dropdown-hover dropdown-left flex">
            <button tabIndex="0" className="m-1 btn btn-ghost btn-xs">
              Details
            </button>
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={onHandleChange}>Cancelado</a>
              </li>
              <li>
                <a onClick={onHandleChange}>Enviado</a>
              </li>
              <li>
                <a onClick={onHandleChange}>Entregado</a>
              </li>
            </ul>
          </div>
        </th>
      </tr>
    </>
  );
};

export default Order;
