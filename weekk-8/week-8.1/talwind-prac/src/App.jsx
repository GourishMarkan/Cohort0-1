import React from "react";
import { RevenueCard } from "./components/RevenueCard";
import "react-chat-elements/dist/main.css";
import { ChatItem } from "react-chat-elements";
import { SpotifyMessage } from "react-chat-elements";
import { ChatList } from "react-chat-elements";
import { MessageList } from "react-chat-elements";
messageListReferance = React.createRef();
function App() {
  return (
    <>
      <div className=" grid grid-cols-4">
        <RevenueCard
          title={"Amount pending"}
          amount={"92,312.20"}
          orderCount={13}
        />
      </div>
      <ChatItem
        avatar={"https://facebook.github.io/react/img/logo.svg"}
        alt={"Reactjs"}
        title={"Facebook"}
        subtitle={"What are you doing?"}
        date={new Date()}
        unread={0}
      />
      <SpotifyMessage
        theme="white"
        view="coverart"
        uri={"spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf"}
      />

      <ChatList
        className="chat-list"
        dataSource={[
          {
            avatar: "https://facebook.github.io/react/img/logo.svg",
            alt: "Reactjs",
            title: "Facebook",
            subtitle: "What are you doing?",
            date: new Date(),
            unread: 0,
          },
        ]}
      />
      <MessageList
        referance={messageListReferance}
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            position: "right",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: new Date(),
          },
        ]}
      />
    </>
  );
}
export default App;
