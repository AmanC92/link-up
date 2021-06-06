import React from "react";
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
                <Options>
                    <Notifications />
                </Options>
            </ContextProvider>
        </div>
    );
};

export default Meeting;
