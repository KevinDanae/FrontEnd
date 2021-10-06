import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../../actions";
import useActionCart from "../../hooks/useActionCart";

const CardCheckout = ({ product }) => {
  const [qt, setQt] = useState(product.q);
  const dispatch = useDispatch();

  const actionCart = async (action, id) => {
    const success = await useActionCart(id, action);
    if (success) dispatch(addCart());
  };

  const onHandleChange = (e) => {
    setQt(e.target.value);

    if (qt < product.q) {
      localStorage.getItem("token") && localStorage.getItem("idCart")
        ? actionCart("remove", e.id)
        : dispatch(removeCart(e.id, true));
    } else if (qt > product.q) {
      localStorage.getItem("token") && localStorage.getItem("idCart")
        ? actionCart("add", e.id)
        : dispatch(addCart({ id: e.id }));
    }
  };
  return (
    <>
      {product && (
        <tr>
          <td className="hidden pb-4 md:table-cell">
            <a href="#">
              <img
                src={product.img || product.image}
                className="w-12 rounded"
                alt="Thumbnail"
              />
            </a>
          </td>
          <td>
            <a href="#">
              <p className="mb-2 md:ml-4">{product.name}</p>
              <form action="" method="POST">
                <button
                  className="text-gray-700 md:ml-4"
                  onClick={() =>
                    localStorage.getItem("token") &&
                    localStorage.getItem("idCart")
                      ? actionCart("remove", product.id)
                      : dispatch(removeCart(product.id))
                  }
                >
                  <small>(Remove item)</small>
                </button>
              </form>
            </a>
          </td>
          <td className="justify-center md:justify-end md:flex mt-6">
            <div className="w-20 h-10">
              <div className="relative flex flex-row w-full h-8">
                <input
                  type="number"
                  onChange={onHandleChange}
                  value={product.quantity}
                  className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                />
              </div>
            </div>
          </td>
          <td className="hidden text-right md:table-cell">
            <span className="text-sm lg:text-base font-medium">
              ${product.price.toFixed(2)}
            </span>
          </td>
          <td className="text-right">
            <span className="text-sm lg:text-base font-medium">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </td>
        </tr>
      )}
    </>
  );
};

export default CardCheckout;
