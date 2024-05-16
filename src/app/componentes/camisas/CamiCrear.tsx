import Form from "react-bootstrap/Form";
import NoFoto from "../../../assets/img/noDisponible.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { CamisaMarca } from "../../modelos/CamisaMarca";
import { ARREGLO_MARCA_CAMISA } from "../../utilidades/dominios/domMarca";
import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import { CamisaTalla } from "../../modelos/CamisaTalla";
import { ARREGLO_TALLA_CAMISA } from "../../utilidades/dominios/domTallas";



export const CamiCrear = () => {
  const irsePara=useNavigate;

  type formHtml=React.FormEvent<HTMLFormElement>;

  const [enProceso, setEnProceso]= useState<boolean>(false);
  const[arrCamisas]=useState<Camisa[]>(ARREGLO_CAMISAS);
  const[arrMarca]=useState<CamisaMarca[]>(ARREGLO_MARCA_CAMISA);
  const [arrTalla]=useState<CamisaTalla[]>(ARREGLO_TALLA_CAMISA);

  let{
    codmarcaCamisa,
    colorCamisa,
    tallaCamisa,
    dobleEnlace,
    objeto,
  }=useFormulario<Camisa>(new Camisa(0,"","",""))

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
          <div className="col-md-6 position-relative">
              <label htmlFor="tall" className="form-label">
                Marca
              </label>
              <select className="form-select border border-primary" id="marc" name="codmarcaCamisa" required value={codmarcaCamisa} onChange={dobleEnlace}>
                <option selected disabled value="">
                  Seleccione la marca...
                </option>
                {arrMarca.map((miMarca:CamisaMarca)=>(
                  <option value={miMarca.nombreMarca}key={miMarca.nombreMarca}>
                    {miMarca.nombreMarca}
                  </option>
                ))}

              </select>
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="colo" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="colo"
                name="colorCamisa" value={colorCamisa} onChange={dobleEnlace}
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
              <select className="form-select border border-primary" id="tall" name="tallaCamisa" required value={tallaCamisa} onChange={dobleEnlace}>
                <option selected disabled value="">
                  Seleccione su talla...
                </option>
                {arrTalla.map((miTalla:CamisaTalla)=>(
                  <option value={miTalla.tallaCamisa}key={miTalla.tallaCamisa}>
                    {miTalla.tallaCamisa}
                  </option>
                ))}

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
