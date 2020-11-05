"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use('/', function (req, res) { return res.send("Merhaba Web "); });
app.listen(3000, function () { return console.log("calisiyor"); });
//# sourceMappingURL=index.js.map