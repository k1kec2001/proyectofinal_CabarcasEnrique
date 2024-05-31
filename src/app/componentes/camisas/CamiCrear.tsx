import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { CamisaMarca } from "../../modelos/CamisaMarca";
import { ARREGLO_MARCA_CAMISA } from "../../utilidades/dominios/domMarca";
import { CamisaTalla } from "../../modelos/CamisaTalla";
import { ARREGLO_TALLA_CAMISA } from "../../utilidades/dominios/domTallas";

export const CamiCrear = () => {
  const irsePara = useNavigate();

  type formHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);

  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
  const [arrMarca] = useState<CamisaMarca[]>(ARREGLO_MARCA_CAMISA);
  const [arrTalla] = useState<CamisaTalla[]>(ARREGLO_TALLA_CAMISA);

  let {
    codmarcaCamisa,
    colorCamisa,
    tallaCamisa,

    dobleEnlace,
    objeto,
  } = useFormulario<Camisa>(new Camisa(0, "", "", ""));

  const enviarForm = (objForm: formHtml) => {
    objForm.preventDefault();
    const formulario = objForm.currentTarget;

    if (formulario.checkValidity() === false) {
      objForm.preventDefault();
      objForm.stopPropagation();
      setEnProceso(true);
    } else {
      const ultimaCamisa = arrCamisas[arrCamisas.length - 1];
      const nuevoCod = ultimaCamisa.codCamisa + 1;
      objeto.codCamisa = nuevoCod;
      arrCamisas.push(objeto);
      setEnProceso(false);
      irsePara("/camlis");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate validated={enProceso} onSubmit={enviarForm}>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Formulario creación</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="marc">
                  <Form.Label>
                    <span className="rojito">*</span> Marca
                  </Form.Label>

                  <Form.Select size="sm" required name="codmarcaCamisa" value={codmarcaCamisa} onChange={dobleEnlace}>
                    <option value="">Seleccione un genero</option>

                    {arrMarca.map((miMarca: CamisaMarca) => (
                      <option value={miMarca.codMarca} key={miMarca.codMarca}>
                        {miMarca.nombreMarca}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="colo">
                  <Form.Label>
                    <span className="rojito">*</span> Color
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="colorCamisa" value={colorCamisa} onChange={dobleEnlace} />
                </Form.Group>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="tall" className="form-label">
                  <span className="rojito">*</span> Talla
                </label>
                <Form.Select size="sm" required id="tall" name="tallaCamisa" value={tallaCamisa} onChange={dobleEnlace}>
                  <option selected disabled value="">
                    Seleccione la talla...
                  </option>
                  {arrTalla.map((miTalla: CamisaTalla) => (
                    <option value={miTalla.tallaCamisa} key={miTalla.tallaCamisa}>
                      {miTalla.tallaCamisa}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Crear Camisa
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
