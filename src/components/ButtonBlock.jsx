import React from "react";

const ButtonBlock = ({ name }) => {
  return (
    <div>
      <button className="ml-4 px-4 py-2 bg-gray-300 rounded-md">{name}</button>
    </div>
  );
};

export default ButtonBlock;
