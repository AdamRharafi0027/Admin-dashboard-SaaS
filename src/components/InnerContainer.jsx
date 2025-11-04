import React from "react";

const InnerContainer = (props) => {
  return (
    <main className="bg-white rounded-lg mt-10 p-10 flex flex-col gap-20">{props.children}</main>
  );
};

export default InnerContainer;
