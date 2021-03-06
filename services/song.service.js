const SongRepository = require("../repositories/song.repositories");

/**
 * Song service
 */


const SongService = {
  findAll: async () => {
    return await SongRepository.findAll();
  },
  findById: async (id) => {
    const song = await SongRepository.findById(id);
    return song;
  },
  findByTitle: async (titleToFind) => {
    const song = await SongRepository.findByTitle(titleToFind);
    return song;
  },
  findByAuthor: async (authorToFind) => {
    const songs = await SongRepository.findByAuthor(authorToFind);
    return songs;
  },
  create: async (song) => {
    await SongRepository.create(song);
  },
  update: async (id, songInfo) => {
    const song = await SongRepository.findById(id);
    if (!song) {
      throw Error("song not found");
    }
    await SongRepository.update(id, songInfo);
  },
  delete: async (id) => {
    const song = await SongRepository.findById(id);
    if (!song) {
      throw Error("song not found");
    }
    return await SongRepository.delete(id);
  },
  deleteAll: async () => {
    return await SongRepository.deleteAll();
  },
  isLonger: (song1, song2) => {
    if (!song1) {
      throw Error("Song1 is null");
    }
    if (!song2) {
      throw Error("Song2 is null");
    }
    return song1.length > song2.length;
  },
  sameArtist: (song1, song2) => {
    if (!song1) {
      throw Error("Song1 is null");
    }
    if (!song2) {
      throw Error("Song2 is null");
    }
    return song1.author == song2.author;
  }

};

module.exports = SongService;
