import React from "react";
import Avatar from "@mui/material/Avatar";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";

const Rates = () => {
  const avis = [
    {
      id: 1,
      avatar: avatar1,
      commentaire:
        "Service exceptionnel ! Les fleurs étaient magnifiques et la décoration florale a ajouté une touche magique à notre mariage.",
    },
    {
      id: 2,
      avatar: avatar2,
      commentaire:
        "Nous avons adoré la personnalisation de notre jardin. C'était exactement ce que nous voulions. Merci pour votre créativité !",
    },
    {
      id: 3,
      avatar: avatar3,
      commentaire:
        "Les bouquets de fleurs étaient incroyables. Un grand merci pour avoir rendu notre journée spéciale encore plus belle.",
    },
  ];

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <h1>Votre avis compte pour nous</h1>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          {avis.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="avis-card">
                <div className="container d-flex justify-content-center align-items-center">
                  <hr className="line left-line" />
                  <div className="avatar-container">
                    <Avatar src={item.avatar} sx={{ width: 56, height: 56 }} />
                  </div>
                  <hr className="line right-line" />
                </div>

                <div className="commentaire">{item.commentaire}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rates;
