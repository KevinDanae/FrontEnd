import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { purchases } from "../../actions";
import Link from 'next/link'
const Purchases = () => {
  const purchasesList = useSelector((state) => state.purchases);
  const user = useSelector((state) => state.userData);
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const info = () => {
    if (userId) dispatch(purchases(userId));
  };

  useEffect(() => {
    info();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl">
        Hi {user.name}! this is your purchases list
      </h1>
      {purchasesList.length ? (
        purchasesList.map((purchase) =>
          purchase.products.map((e) => (
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
                ${e.price.toFixed(2)}
              </div>
            </div>
          ))
        )
      ) : (
        <p className="font-bold text-xl mt-4">Now you have no purchases made</p>
      )}
    </div>
  );
};

export default Purchases;
