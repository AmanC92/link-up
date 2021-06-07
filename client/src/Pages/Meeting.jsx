import React from "react";
import ChatBox from "../components/ChatBox";
import Notifications from "../components/Notifications";
import Options from "../components/Options";
import VideoPlayer from "../components/VideoPlayer";
import { ContextProvider } from "../context/SocketContext";
import "../styles/app.css";

const Meeting = () => {
    return (
        <div className="wrapper">
            <ContextProvider>
                <VideoPlayer />
                <ChatBox />
                <Options>
                    <Notifications />
                </Options>
            </ContextProvider>
        </div>
    );
};

export default Meeting;
