import React from "react";
import CommentsList from "./CommentsList";

const Comments = ({ info }) => {
  console.log(info, "comments 222222222");
  const { name, comment, replys } = info;
  return (
    <div className="m-1 px-10 rounded-md shadow-md flex  bg-gray-100 border-black">
      <div>
        <img
          className="h-10 px-4 py-2"
          alt="profile"
          src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{comment}</p>
        {replys &&
          replys.map((comment, index) => (
            <CommentsList key={index} info={comment} />
          ))}
      </div>
    </div>
  );
};

export default Comments;
