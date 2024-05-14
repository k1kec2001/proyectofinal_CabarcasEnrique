import foto1 from "../../../assets/img/foto1.png";
import foto2 from "../../../assets/img/foto2.png";
import foto3 from "../../../assets/img/foto3.png";
import foto4 from "../../../assets/img/foto4.png";
import foto5 from "../../../assets/img/foto5.png";

export const Acerca = () => {
  return (
    <>
      <section className="bg-light pb-4">
        <div className="container-fluid">
          <div className="row pt-2">
            <div className="col-12">
              <h3 className="border-bottom mb-4">Acerca de</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Ryuuk</h5>
                  <p className="card-text">Desarrollador Senior-Shinigami Freelance</p>
                  <div className="text-center ">
                    <img src={foto1} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Edward Elric</h5>
                  <p className="card-text">Desarrollador Junior-Alquimista Freelance</p>
                  <div className="text-center ">
                    <img src={foto2} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Yuji Itadori</h5>
                  <p className="card-text">Desarrollador Bru-Hechicero Freelance</p>
                  <div className="text-center ">
                    <img src={foto3} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Naruto Uzumaki</h5>
                  <p className="card-text">Inversor Inicial-Ninja/Hokage</p>
                  <div className="text-center ">
                    <img src={foto4} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Kid Buu</h5>
                  <p className="card-text">Extranjero-Destruyó el planeta</p>
                  <div className="text-center ">
                    <img src={foto5} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
  