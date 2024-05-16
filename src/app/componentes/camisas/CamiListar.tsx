import { useState } from "react";
import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { ARREGLO_MARCA_CAMISA } from "../../utilidades/dominios/domMarca";

export const CamiListar = () => {
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
                <th style={{ width: "20%" }}>Color</th>
                <th style={{ width: "20%" }} className="text-center">
                  Talla
                </th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCamisa: Camisa) => (
                <tr>
                  <td>{miCamisa.codCamisa}</td>
                  <td>{getNombreMarca(miCamisa.codmarcaCamisa)}</td>
                  <td>{miCamisa.colorCamisa}</td>
                  <td className="text-center">{miCamisa.tallaCamisa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
