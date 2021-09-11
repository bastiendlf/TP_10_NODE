const express = require('express');
const songRouter = express.Router();
const songController = require("../controllers/song.controller");

const API_SONGS_PARAM = "/:id";
const API_SONGS_QUERY = "/search";

songRouter.route("/").get(songController.findAll);
songRouter.route(API_SONGS_PARAM).get(songController.findById);
songRouter.route(API_SONGS_QUERY).get(songController.findByTitle);

module.exports = songRouter;