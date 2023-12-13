const { sequelize, Users, Fleurs, Bouquets, ContientFleur} = require('./models');
const fleurs = require("../Data/fleurs.json");
const bouquet = require("../Data/bouquets.json");
const insertData = async () => {
    await sequelize.models.Fleurs.bulkCreate(fleurs);

    await sequelize.models.Bouquets.bulkCreate(bouquet);
  
    

    
    await sequelize.models.Users.bulkCreate([
      { login: 'user1', PSW:'123abc' ,nomComplet:'BERKATI Farah'},
      { login: 'user2', PSW:'123abc' ,nomComplet:'BERKATI Joy'},
    
    ]);
   
  // Insérer les associations entre utilisateurs, bouquets et fleurs
  const user1 = await Users.findOne({ where: { login: 'user1' } });
  const user2 = await Users.findOne({ where: { login: 'user2' } });

  const bouquet1 = await Bouquets.findOne({ where: { nom: 'Bouquet Exotique' } });
  const bouquet2 = await Bouquets.findOne({ where: { nom: 'Bouquet Romantique' } });
  const bouquet3 = await Bouquets.findOne({ where: { nom: 'Bouquet de Printemps' } });

  const fleur1 = await Fleurs.findOne({ where: { nom: 'Rose' } });
  const fleur2 = await Fleurs.findOne({ where: { nom: 'Jasmin' } });
  const fleur3 = await Fleurs.findOne({ where: { nom: 'Lys' } });
  const fleur4 = await Fleurs.findOne({ where: { nom: 'Tulipe' } });
  const fleur5 = await Fleurs.findOne({ where: { nom: 'Freesia' } });
  const fleur6 = await Fleurs.findOne({ where: { nom: 'Pivoine' } });
  const fleur7 = await Fleurs.findOne({ where: { nom: 'Dahlia' } });
  const fleur8 = await Fleurs.findOne({ where: { nom: 'Orchidée' } });
  const fleur9 = await Fleurs.findOne({ where: { nom: 'RedRose' } });
  
  // Ajouter des likes de bouquets par des utilisateurs
  await user1.addBouquet(bouquet1);
  await user1.addBouquet(bouquet2);
  await user2.addBouquet(bouquet2);
  await user2.addBouquet(bouquet3);
  await user2.addBouquet(bouquet1);

  // Ajouter des fleurs à des bouquets
await bouquet1.addFleur(fleur5, { through: { qntt: 5 } });
await bouquet1.addFleur(fleur8, { through: { qntt: 3 } });
await bouquet2.addFleur(fleur9, { through: { qntt: 10 } });
await bouquet2.addFleur(fleur4, { through: { qntt: 6 } });
await bouquet3.addFleur(fleur1, { through: { qntt: 7 } });
await bouquet3.addFleur(fleur7, { through: { qntt: 8 } });
await bouquet3.addFleur(fleur6, { through: { qntt: 7 } });

  
  };
  module.exports = insertData;