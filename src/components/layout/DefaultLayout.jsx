import React from "react";
import Navbar from "../Navbar/Navbar";

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
