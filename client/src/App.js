import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import "./styles/app.css";

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

const App = () => {
    const classes = useStyles();
    return (
        <div className="wrapper">
            <AppBar className={classes.wrapperAppBar} position="static" color="inherit">
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

export default App;
