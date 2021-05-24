// Import express, http and cors.
// Cors will be used to allow us to make calls between
// different domains that we approve.
const app = require("express")();
const server = require("http").createServer();
const cors = require("cors");

// Socket IO enables realtime communication between
// web clients and servers so this is the
// IO server side instance.
const io = require("socket.io")(server, {
    cors: {
        // Allows access from all origins.
        origin: "*",
        methods: ["GET", "POST"],
    },
});

app.use(cors());

// Connect to desired PORT if given or default to 4000.
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Server is running.");
});
