import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, wishList } from "../../actions";
import Link from "next/link";

const Wish = () => {
  const wish = useSelector((state) => state.wish);
  const dispatch = useDispatch();

  return (
    <>
      <div className="rounded-b border-t-0 z-10">
        <div className="shadow-xl w-64">
          {wish.length ? (
            wish.map((e) => (
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
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                  <button onClick={() => dispatch(wishList(e, true))}>
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
        </div>
      </div>
    </>
  );
};

export default Wish;
