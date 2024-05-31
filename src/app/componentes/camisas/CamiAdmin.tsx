import { useState } from "react";
import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { ARREGLO_MARCA_CAMISA } from "../../utilidades/dominios/domMarca";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const CamiAdmin = () => {
  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
  const [objCami, setObjCami] = useState<Camisa>(new Camisa(0, "", "", ""));
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };

  const getNombreMarca = (valor: string) => {
    for (const objMarc of ARREGLO_MARCA_CAMISA) {
      if (objMarc.codMarca == valor) {
        return objMarc.nombreMarca;
      }
    }
  };
  const eliminarCamisa = (codigo: number) => {
    const cantidad = arrCamisas.length;

    for (let i = 0; i < cantidad; i++) {
      if (arrCamisas[i] != undefined) {
        const comparar = arrCamisas[i].codCamisa;
        if (comparar == codigo) {
          arrCamisas.splice(i, 1);
        }
      }
    }
  };
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "50%" }}>Marca</th>
                <th style={{ width: "15%" }}>Color</th>
                <th style={{ width: "15%" }} className="text-center">
                  Talla
                </th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCamisa: Camisa) => (
                <tr>
                  <td>{miCamisa.codCamisa}</td>
                  <td>{getNombreMarca(miCamisa.codmarcaCamisa)}</td>
                  <td>{miCamisa.colorCamisa}</td>
                  <td className="text-center">{miCamisa.tallaCamisa}</td>
                  <td className="text-center">
                    <a
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                        setObjCami(miCamisa);
                      }}
                    >
                      <i className="fa-solid fa-trash rojito"></i>
                    </a>{" "}
                    <NavLink to={"/camactual/" + miCamisa.codCamisa}>
                      <i className="fa-solid fa-pen-to-square verde"></i>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Eliminar Camisas</Modal.Title>
            </Modal.Header>

            <Modal.Body>¿Está seguro de eliminar la camisa {objCami.codCamisa}?</Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={(e) => {
                  setShow(false);
                }}
              >
                Cancelar
              </Button>

              <Button
                variant="danger"
                onClick={(e) => {
                  eliminarCamisa(objCami.codCamisa);
                  setShow(false);
                }}
              >
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};
