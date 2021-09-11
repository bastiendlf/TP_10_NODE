const db = require("../models");
const Song = db.songs;

/**
 * Song repository
 */
const SongRepository = {
    findAll: () => {
        return Song.findAll();
    },
    findById: (id) => {
        const song = Song.findByPk(id);
        return song;
    },
    findByTitle: (titleToFind) => {
        const song = Song.findOne({ where: {title: titleToFind}});
    }

};


module.exports = SongRepository;