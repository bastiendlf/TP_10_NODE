const SongService = require("../services/song.service");

const SongController = {
    findAll: (req, res, next) => {
        const song = SongService.findAll();
        res.send(song);
    },
    findById: (req, res, next) => {
        const songId = req.params.id;
        const song = SongService.findById(songId);
        res.send(song);
    },
    findByTitle: (req, res, next) => {
        const query = req.query.q;
        const song = SongService.findByTitle(query);
        res.send(song);
    },
};

module.exports = SongController;