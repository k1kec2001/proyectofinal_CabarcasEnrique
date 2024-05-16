import { useState } from "react";
import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { ARREGLO_MARCA_CAMISA } from "../../utilidades/dominios/domMarca";

export const CamiAdmin = () => {
  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);

  const getNombreMarca = (valor: string) => {
    for (const objMarc of ARREGLO_MARCA_CAMISA) {
      if (objMarc.codMarca == valor) {
        return objMarc.nombreMarca;
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
                  <td>
                    <a href="/camactual/:codigo">
                      <i className="fa-solid fa-pen-to-square" style={{ color: "#e28743" }}></i>
                    </a>{" "}
                    <a href="/#">
                      <i className="fa-solid fa-trash" style={{ color: "#FF0000" }}></i>
                      </a>
                    
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
