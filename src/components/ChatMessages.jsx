import React from "react";

const ChatMessages = ({ chatInfo }) => {
  const { name, message } = chatInfo;
  return (
    <>
      <div className="mt-1 bg-slate-200 shadow-md rounded-md flex">
        <div className="w-1/4 py-1 px-2">
          <img
            className="w-10 h-10 px-1 pt-3 items-center"
            alt="profile"
            src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png"
          />
        </div>
        <div className="w-3/4 flex flex-col item-center py-1">
          <span className="w-full font-bold px-2 ">{name}</span>
          <span className="w-full font-thin px-2">{message}</span>
        </div>
      </div>
    </>
  );
};

export default ChatMessages;
