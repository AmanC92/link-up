import React, { createContext, useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import { io } from "socket.io-client";

const SocketContext = createContext();

const socket = io({ path: "/socket.io" });

const ContextProvider = ({ children }) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState(null);
    const [name, setName] = useState("Name");
    const [call, setCall] = useState({});
    const [me, setMe] = useState("");
    const [history, setHistory] = useState({ message: "", name: "" });
    const [chat, setChat] = useState([]);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        if (!stream) {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then((currentStream) => {
                    setStream(currentStream);

                    myVideo.current.srcObject = currentStream;
                });
        }
        socket.on("message", ({ name, message }) => {
            console.log("setting chat");
            setChat([...chat, { name, message }]);
        });
        socket.on("me", (id) => setMe(id));

        socket.on("callUser", ({ from, name: callerName, signal }) => {
            setCall({ isReceivingCall: true, from, name: callerName, signal });
        });

        // Clean-up -> turn video & audio off if not on meeting page.
        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => {
                    track.stop();
                });
            }
        };
    }, [stream, chat]);

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: call.from });
        });

        peer.on("stream", (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    };

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name,
            });
        });

        peer.on("stream", (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on("callAccepted", (signal) => {
            setCallAccepted(true);

            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);

        connectionRef.current.destroy();

        window.location.reload();
    };

    const sendMessage = () => {
<<<<<<< HEAD
        console.log("sending message");
=======
>>>>>>> aee05d3 (Set up wireframe for chatting.)
        const { name, message } = history;
        socket.emit("message", { name, message });
        setHistory({ message: "", name });
    };

    return (
        <SocketContext.Provider
            value={{
                call,
                callAccepted,
                myVideo,
                userVideo,
                stream,
                name,
                setName,
                callEnded,
                me,
                callUser,
                leaveCall,
                answerCall,
                sendMessage,
                history,
                setHistory,
                chat,
                setChat,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };
