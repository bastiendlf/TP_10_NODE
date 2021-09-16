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
    const song = Song.findOne({ where: { title: titleToFind } });
    return song;
  },
  findByAuthor: (authorToFind) => {
    const songs = Song.findAll({ where: { author: authorToFind } });
    return songs;
  },
  create: (song) => {
    return Song.create(song);
  },
  update: (id, song) => {
    return Song.update(song, { where: { id: id } });
  },
  delete: (id) => {
    return Song.destroy({ where: { id: id } });
  }

};


module.exports = SongRepository;