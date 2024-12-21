import React from "react";
import Comments from "./Comments";

const CommentsList = ({ info }) => {
  return (
    <div className="py-2">
      <Comments info={info} />
    </div>
  );
};

export default CommentsList;
