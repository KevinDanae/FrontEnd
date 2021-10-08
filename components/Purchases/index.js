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
            Hola
        </div>
    )
}

export default Purchases;
