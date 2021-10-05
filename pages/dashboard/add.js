import React from "react";
import Sidebar from "../../components/Admin/Sidebar";
import Creation from "../../components/Creation";

const Admin = () => {
  return (
    <main>
      <Sidebar render={Creation} />
    </main>
  );
};

export default Admin;
