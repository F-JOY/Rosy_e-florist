const {sequelize}=require('./DBconnect')
const insertData=require('./insertData')


const initiateDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync({ force: false });
      console.log('Tables synchronisées.');
      // Insérer des données pour la premier execution  puis commenter l'insertion
      //await insertData();
     // console.log('Données de test insérées avec succès.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  module.exports= initiateDB;