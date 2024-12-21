import React from "react";
import Comments from "./Comments";

const CommentsList = ({ info }) => {
  console.log(info, "info comments 11111111");
  return (
    <div className="py-2">
      <Comments info={info} />
    </div>
  );
};

export default CommentsList;
