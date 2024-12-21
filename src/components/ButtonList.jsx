import React from "react";
import { BTN_SUGGESSIONS_LIST } from "../utils/constants";
import ButtonBlock from "./ButtonBlock";

const ButtonList = () => {
  return (
    <div className="flex px-2 py-4 shadow-sm">
      {BTN_SUGGESSIONS_LIST.map((info,index) => (
        <ButtonBlock key={index} name={info} />
      ))}
    </div>
  );
};

export default ButtonList;
