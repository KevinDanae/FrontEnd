import React from "react";
import Sidebar from "../../components/Admin/Sidebar";
import AddCategory from "../../components/AddCategories";

const Admin = () => {
  return (
    <main>
      <Sidebar render={AddCategory} />
    </main>
  );
};

export default Admin;
