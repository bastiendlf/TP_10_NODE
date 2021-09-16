const SongService = require("../services/song.service");

/**
 * Song controller
 */


const SongController = {
    findAll: async (req, res, next) => {
        const song = await SongService.findAll();
        res.send(song);
    },
    findById: async (req, res, next) => {
        const songId = req.params.id;
        const song = await SongService.findById(songId);
        res.send(song);
    },
    findByTitle: async (req, res, next) => {
        const query = req.query.q;
        const song = await SongService.findByTitle(query);
        res.send(song);
    },
    findByAuthor: async (req, res, next) => {
        const query = req.query.q;
        const songs = await SongService.findByAuthor(query);
        res.send(songs);
    },
    create: async (req, res, next) => {
        const song = req.body;
        await SongService.create(song);
        res.status(200).send({ message: "song created successfully" });
    },
    update: async (req, res, next) => {
        const songId = req.params.id;
        const songInfo = req.body;
        try {
            await SongService.update(songId, songInfo);
            res.status(200).send({ message: "song updated successfully" });
        } catch (error) {
            res.status(404).send({ message: `song with id - ${songId} not found` });
        }
    },
    delete: async (req, res, next) => {
        const songId = req.params.id;
        try {
            await SongService.delete(songId);
            res.status(200).send({ message: "song deleted successfully" });
        } catch (error) {
            res.status(404).send({ message: `song with id - ${songId} not found` });
        }
    }
};

module.exports = SongController;