const expect = require("chai").expect;
const SongService = require("../services/song.service");


//# region data

const song1 = {
    title: "Hello",
    genre: "Electro",
    author: "Bob",
    length: 185
};

const song2 = {
    title: "World",
    genre: "Rap",
    author: "Michel",
    length: 204
};

const song3 = {
    title: "INTES",
    genre: "Rap",
    author: "Michel",
    length: 150
};

//# region test


describe("SongService", () => {
    describe("isLonger", () => {
      it("should return true", () => {
        const result = SongService.isLonger(song2, song1);
        expect(result).to.be.true;
      });
      it("should return false", () => {
        const result = SongService.isLonger(song1, song2);
        expect(result).to.be.false;
      });
    });
    describe("sameArtist", () => {
        it("should return true", () => {
          const result = SongService.sameArtist(song2, song3);
          expect(result).to.be.true;
        });
        it("should return false", () => {
            const result = SongService.sameArtist(song1, song3);
            expect(result).to.be.false;
        });
      });
  });
