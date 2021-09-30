import React from "react";
import Orders from "../../components/Admin/Orders";
import Sidebar from "../../components/Admin/Sidebar";

const dashboard = () => {
  return (
    <>
      <Sidebar render={Orders} />
    </>
  );
};

export default dashboard;
