import React, { useEffect, useState } from "react";

const useSubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);

  const request = async () => {
    const data = await fetch("https://wines-db.herokuapp.com/subcategories");
    const info = await data.json();
    setSubCategories(info);
  };
  
  useEffect(() => {
    request();
  }, []);

  return {
    subCategories
  }
};

export default useSubCategory;