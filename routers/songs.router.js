const express = require('express');
const songRouter = express.Router();
const songController = require("../controllers/song.controller");
const { validate } = require("express-validation");
const SongValidator = require("../validators/song.validators");


const API_SONGS_PARAM = "/:id";
const API_SONGS_QUERY = "/artists";

songRouter.route("/")
    .get(songController.findAll)
    .post(validate(SongValidator.validateCreate), songController.create);
;

songRouter.route(API_SONGS_QUERY)
    .get(songController.findByAuthor);

songRouter.route(API_SONGS_PARAM)
    .get(songController.findById)
    .put(validate(SongValidator.validateUpdate), songController.update)
    .delete(songController.delete);

module.exports = songRouter;