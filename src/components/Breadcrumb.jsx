import React from "react";

const Breadcrumb = ({ items, current }) => {
  return (
    <div className="text-sm text-gray-500">
      {items.map((item, index) => (
        <span key={index}>
          {item} /{" "}
        </span>
      ))}
      <span className="text-black font-medium">{current}</span>
    </div>
  );
};

export default Breadcrumb;