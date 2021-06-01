import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect } from "react";
import Notifications from "../components/Notifications";
import Options from "../components/Options";
import VideoPlayer from "../components/VideoPlayer";
import { SocketContext } from "../SocketContext";
import "../styles/app.css";

const useStyles = makeStyles((theme) => ({
    wrapperAppBar: {
        borderRadius: 15,
        margin: "30px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        border: "2px solid black",

        [theme.breakpoints.down("xs")]: {
            width: "90%",
        },
    },
}));

const Meeting = () => {
    const classes = useStyles();
    const { establishConnection } = useContext(SocketContext);

    useEffect(() => {
        establishConnection();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="wrapper">
            <AppBar
                className={classes.wrapperAppBar}
                position="static"
                color="inherit"
            >
                <Typography variant="h2" align="center">
                    Video Chat
                </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
};

export default Meeting;
