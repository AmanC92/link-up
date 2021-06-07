import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const ChatBox = () => {
    const { history, setHistory, chat, sendMessage, name } =
        useContext(SocketContext);
    console.log(name);
    const onTextChange = (e) => {
        setHistory({ ...history, [e.target.name]: e.target.value });
        console.log(history);
    };

    const onMessageSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ));
    };

    return (
        <div className="chat-wrapper">
            <div className="render-chat">
                <h1>Chat Log</h1>
                {renderChat()}
            </div>
            <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <div>
                    <TextField
                        name="message"
                        onChange={(e) => onTextChange(e)}
                        value={history.message}
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Message"
                    />
                </div>
                <button>Send Message</button>
            </form>
        </div>
    );
};

export default ChatBox;
