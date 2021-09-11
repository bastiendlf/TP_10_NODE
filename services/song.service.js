const SongRepository = require("../repositories/song.repositories")

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
};

module.exports = SongService;
