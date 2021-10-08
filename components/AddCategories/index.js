import React from "react";
import { useState } from "react";
import useSubCategory from "../../hooks/useSubCategory";

const AddCategories = () => {
  const { subCategories } = useSubCategory();

  const [subCategory, setSubCategory] = useState({
    type: "",
    category: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(
      "https://wines-db.herokuapp.com/subcategories",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subCategory),
      }
    );
    const data = await response.json();
    alert("SubCategory added");
    setSubCategory({
      type: "",
      category: "",
    });
  }

  const handleChange = (e) => {
    setSubCategory({
      ...subCategory,
      [e.target.name]: e.target.value,
    });
  };

  console.log(subCategories);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          className="select select-bordered select-accent w-full max-w-xs"
          name="category"
          onChange={(e) => handleChange(e)}
        >
          <option disabled="disabled" selected="selected">
            Choose the category where you want to add a new subcategory
          </option>
          <option name="category" value=""></option>
          <option name="category" value="wines">
            Wines
          </option>
          <option name="category" value="beers">
            Beers
          </option>
          <option name="category" value="whisky">
            Whisky
          </option>
        </select>

        <div className="form-control">
          <input
            type="text"
            placeholder="Subcategory"
            name="type"
            className="input input-primary input-bordered"
            value={subCategory.type}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button className="btn btn-primary mt-3" type="submit">
          Add Subcategory
        </button>
      </form>
    </div>
  );
};

export default AddCategories;
