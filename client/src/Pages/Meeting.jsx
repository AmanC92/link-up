import React, { useContext, useEffect } from "react";
import Notifications from "../components/Notifications";
import Options from "../components/Options";
import VideoPlayer from "../components/VideoPlayer";
import { SocketContext } from "../SocketContext";
import "../styles/app.css";

const Meeting = () => {
    const { establishConnection } = useContext(SocketContext);

    useEffect(() => {
        establishConnection();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="wrapper">
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
};

export default Meeting;
