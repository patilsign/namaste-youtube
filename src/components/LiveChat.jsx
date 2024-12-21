import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../utils/store/chatSlice";
import {
  getRandomMessage,
  getRandomName,
} from "../utils/helpers/nameGenerator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store?.chat?.chatData);
  const [liveMessages, setLiveMessage] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addChatMessages({
          name: getRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [liveMessages]);

  return (
    chatData && (
      <>
        <div className="w-full h-[500px] overflow-y-scroll flex flex-col-reverse">
          <div>
            {chatData.map((chats, index) => (
              <ChatMessages key={index} chatInfo={chats} />
            ))}
          </div>
        </div>

        <form
          className="w-full my-3 shadow-lg flex"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addChatMessages({
                name: "Santosh Patil",
                message: liveMessages,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="w-3/4 py-2 px-2 my-2"
            type="text"
            value={liveMessages}
            onChange={(e)=>setLiveMessage(e.target.value)}
          />
          <button className="w-1/4 py-2 px-2 font-bold  bg-green-200 mx-2 my-2 rounded-md">
            Send
          </button>
        </form>
      </>
    )
  );
};

export default LiveChat;
