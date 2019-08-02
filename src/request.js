"use strict";

const https = require("https");

const myRequest = (url, cb) => {
  https
    .get(url, response => {
      let allData = "";
      response.on("data", chunk => {
        allData += chunk;
      });
      response.on("end", () => {
        const body = JSON.parse(allData);
        cb(null, body);
      });
    })
    .on("error", err => cb(err));
};

module.exports = myRequest;
