import React from "react";
import MessageContainer from "./ShowMessage/ShowMessage";
import ChatList from "./ChatList/ChatList";
import { useSelector } from "react-redux";

const Messenger = () => {
  const darkMode = useSelector((state) => state.counter.darkMode);

  return (
    <div>
      <div className={`flex relative top-[-4.28rem] interfont ${darkMode ? "dark" : ""}`}>
        <ChatList />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Messenger;
