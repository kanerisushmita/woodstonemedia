const express = require('express');
const app = express();
var cors = require('cors');
var BodyParser = require("body-parser");
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")))
app.use(cors());
app.use(express.json());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(Listening on port ${port}));