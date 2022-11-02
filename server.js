const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// routes
const settingsRouter = require("./settingsRoutes");

// routes
app.use("/api/v1/settings", settingsRouter);

//port
const port = process.env.PORT || 5000;

app.listen(port,() => console.log('Listening to port ' + port));