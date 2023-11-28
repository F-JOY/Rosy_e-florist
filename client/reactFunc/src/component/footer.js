export default function Footer() {
  return (
    <footer className="bg-color p-4 mt-4 fixed bottom-0">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 text-center">
            <h5>À propos de nous</h5>
            <p>
              Nous sommes passionnés par le partage de la beauté des fleurs avec
              vous. Notre mission est d'apporter de la joie à travers les
              merveilles de la nature.
            </p>
          </div>
        </div>
        <hr className="footer-divider"/>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Florify. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
