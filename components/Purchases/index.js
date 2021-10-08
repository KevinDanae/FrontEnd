import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { purchases } from "../../actions";
const Purchases = () => {
    const purchasesList = useSelector(state => state.purchases);
    const userId = JSON.parse(localStorage.getItem("userId"))
    const dispatch = useDispatch();
    if(userId) dispatch(purchases(userId))



    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-3xl">Hi {purchasesList.name}! this is your purchases list</h1>
            {purchasesList.length ? purchasesList.map(purchase => (
                purchase.products.map(product => (
                <div className="flex flex-col mb-4" key={product.id}>
                    <h2 className="font-bold text-2xl">{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{purchase.status}</p>
                </div>
                ))
            )) : <p className="font-bold text-xl mt-4">Now you have no purchases made</p>
            }
        </div>
    )
}

export default Purchases;
