export  const state={
    navigation: [
        {
          id: 1,
          path: "/",
          label: "Accueil",
        },
        {
          id: 2,
          path: "/bouquets",
          label: "Bouquets",
        },
        {
          id: 3,
          path: "/fleurs",
          label: "Fleurs",
        },
        {
          id: 4,
          path: "/compte",
          label: "Mon Compt",
        },
      ],
      slides: [
        {
          id: 1,
          image: "http://localhost:5000/img/sl1.jpg",
          titre: "Jardins Sur-Mesure",
          sousTitre:
            "Transformer votre espace extérieur en un paradis floral unique",
          class: "carousel-item active",
        },
        {
          id: 2,
          image: "http://localhost:5000/img/sl2.png",
          titre: "Mariages Élégants",
          sousTitre: "Sublimez votre mariage avec des fleurs exceptionnelles",
          class: "carousel-item",
        },
        {
          id: 3,
          image: "http://localhost:5000/img/sl3.png",
          titre: "Cadeaux Fleuris",
          sousTitre:
            "Cadeaux Fleurs : Témoignage d'Affection en Bouquets et Paniers",
          class: "carousel-item",
        },
      ],
      mesBouquets:[
      {
        id:1,
        nom:'Bouquet de Tunis',
        descr:'Un dosage parfait de jasmins et de tulipes, des coulers éclatantes et du soleil toute l\'année chez vous',
        image:"http://localhost:5000/images/Btulipe.jpg",
        prix:'1500.00',
        like:false,
        nbLike:0,
      },
      {
        id:2,
        nom:'Bouquet d\'Alger',
        descr:'Un dosage parfait de jasmins et de senteurs méditeriannes , des odeurs éclatantes pour égayer votre bureau',
        image:"http://localhost:5000/images/Bjasmin.jpg",
        prix:"2000.00",
        like:false,
        nbLike:0,
      },
      {
        id:3,
        nom:'Bouquet d\'Oran',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"http://localhost:5000/images/blys.jpg",
        prix:"2000.00",
        like:false,
        nbLike:0,
      }, {
        id:4,
        nom:'Bouquet d\'Oran',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"http://localhost:5000/images/blys.jpg",
        prix:"2000.00",
        like:false,
        nbLike:0,
      },
      {
        id:5,
        nom:'Bouquet d\'Oran',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"http://localhost:5000/images/blys.jpg",
        prix:"2000.00",
        like:false,
        nbLike:0,
      }
    ],
    Fleurs:[
        {
            id:1,
            nom:"jasmin",
            discr:"Facile d’entretien, le jasmin est un séduisant arbuste grimpant à la magnifique floraison estivale blanche ou jaune qui exhale un doux parfum.",
            image:"http://localhost:5000/image/jasmin.jpg"
        },{
            id:2,
            nom:"lys",
            discr:"Facile d’entretien, le jasmin est un séduisant arbuste grimpant à la magnifique floraison estivale blanche ou jaune qui exhale un doux parfum.",
            image:"http://localhost:5000/image/lys.jpg"

        },{
            id:3,
            nom:"Tulipe",
            discr:"Facile d’entretien, le jasmin est un séduisant arbuste grimpant à la magnifique floraison estivale blanche ou jaune qui exhale un doux parfum.",
            image:"http://localhost:5000/image/tulipe.jpg"
        },{
            id:4,
            nom:"Rose",
            discr:"Facile d’entretien, le jasmin est un séduisant arbuste grimpant à la magnifique floraison estivale blanche ou jaune qui exhale un doux parfum.",
            image:"http://localhost:5000/image/rose.jpg"
        }
    ]

}