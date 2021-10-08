import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../actions";
import { loadStripe } from "@stripe/stripe-js";
import useActionCart from "../../hooks/useActionCart";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const actionCart = async (action, id) => {
    const success = await useActionCart(id, action);
    if (success) dispatch(addCart());
  };

  let total = 0;
  let name = "";
  const images = [];
  cart?.map((e) => {
    total = total +  (e.quantity || e.products_carts.quantity) * e.price;
    name = name + e.name + ` x${e.quantity}` + ", ";
    images.push(e.picture || e.img);
  });

  return (
    <>
      <div className="rounded-b border-t-0 z-10">
        <div className="shadow-xl w-64">
          {cart.length ? (
            cart.map((e) => (
              <div
                key={e.id || e.name}
                className="p-2 flex bg-base-200 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              >
                <Link href={`/product/${e.id}`}>
                  <div className="p-2 w-12">
                    <img src={e.img || e.picture} alt="img product" />
                  </div>
                </Link>
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">{e.name}</div>
                  <div className="truncate">Product 1 description</div>
                  <div className="text-gray-400">
                    Qty: {e.quantity || e.products_carts.quantity}
                    <button
                      className="ml-3 w-4 h-4 align-middle hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                      onClick={() =>
                        localStorage.getItem("token") &&
                        localStorage.getItem("idCart")
                          ? actionCart("remove", e.id)
                          : dispatch(removeCart(e.id, true))
                      }
                    >
                      -
                    </button>
                    <button
                      className="ml-3 w-4 h-4 align-middle hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                      onClick={() =>
                        localStorage.getItem("token") &&
                        localStorage.getItem("idCart")
                          ? actionCart("add", e.id)
                          : dispatch(addCart({ id: e.id }))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                  <button
                    onClick={() =>
                      localStorage.getItem("token") &&
                      localStorage.getItem("idCart")
                        ? actionCart("removeproduct", e.id)
                        : dispatch(removeCart(e.id))
                    }
                  >
                    <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trash-2 "
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </div>
                  </button>
                  ${e.price.toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            <h1 className="align-middle flex justify-center font-semibold">
              Comienza agregando algo
            </h1>
          )}
          <div className="flex align-middle bg-base-200 justify-center p-4">
            <form
              action={`/api/checkout_sessions?name=${name}&total=${total}&images=${images}`}
              method="POST"
            >
              <button
                className={`btn ${
                  total != 0 ? "btn-secondary" : "btn-disabled"
                }`}
                type="submit"
                role="link"
              >
                {total != 0 ? `Checkout: ${total.toFixed(2)}` : "Agrega algo"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
