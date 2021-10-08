import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { purchases } from "../../actions";
const Purchases = () => {
    const purchasesList = useSelector(state => state.purchases);
    const userId = localStorage.getItem("userId");
    const dispatch = useDispatch();
    if(userId) dispatch(purchases(userId))



    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-3xl">Hi {purchasesList.name}! this is your purchases list</h1>
            {purchasesList.purchases ? purchasesList.purchases.map(purchase => (
                <div className="flex flex-col mb-4" key={purchase.id}>
                    <h2 className="font-bold text-2xl">{purchase.name}</h2>
                    <p>{purchase.description}</p>
                </div>
            )) : <p className="font-bold text-xl mt-4">Now you have no purchases made</p>
            }
        </div>
    )
}

export default Purchases;
