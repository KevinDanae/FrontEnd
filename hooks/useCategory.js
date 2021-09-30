import React, { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  const request = async () => {
    const data = await fetch("https://wines-db.herokuapp.com/categories");
    const info = await data.json();
    setCategories(info);
  };
  
  useEffect(() => {
    request();
  }, []);
  return {
      categories
  }
};

export default useCategory;
