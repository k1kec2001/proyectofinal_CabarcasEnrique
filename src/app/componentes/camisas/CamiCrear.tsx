export const CamiCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6 position-relative">
              <label htmlFor="marc" className="form-label">
                Marca
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="marc"
                name="marc"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="colo" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="colo"
                name="colo"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="preci" className="form-label">
                Precio
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="preci"
                name="preci"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="tall" className="form-label">
                Talla
              </label>
              <select className="form-select border border-primary" id="tall" name="tall" required>
                <option selected disabled value="">
                  Seleccione su talla...
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar Camisa
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
