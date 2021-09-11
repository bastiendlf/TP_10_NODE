module.exports = (sequelize, Sequelize) => {
    const Song = sequelize.define("song", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
        },
      },
    });
  
    return Song;
  };
  