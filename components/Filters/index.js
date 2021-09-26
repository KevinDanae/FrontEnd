import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByCategory, getProducts } from "../../actions";
import useCategory from "../../hooks/useCategory";

const Filters = () => {
  const { categories } = useCategory();
  const dispatch = useDispatch()

  const [filter, setFilter] = useState("");

  const change = (e) => {
    if (e.target.value === filter) {
      setFilter("");
      dispatch(getProducts());
    } else {
      setFilter(e.target.value);
      dispatch(getByCategory(e.target.value));
    }
  };

  return (
    <div className="flex justify-center -mt-11 bg-white">
      <div className="navbar bg-white text-black-content rounded-box">
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            {categories &&
              categories.map((e) => (
                <button
                  key={e.id}
                  onClick={change}
                  className={`btn btn-sm rounded-btn ${
                    filter === e.name ? "select-info btn-primary" : "btn-ghost"
                  }`}
                  value={e.name}
                >
                  {e.name}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
