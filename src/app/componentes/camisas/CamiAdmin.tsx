export const CamiAdmin = () => {
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
              <tr>
                <td>1</td>
                <td>Nike</td>
                <td>Blanco</td>
                <td className="text-center">XL</td>
                <td>
                  <i className="fa-solid fa-pen-to-square" style={{color: "#e28743"}}></i>&nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#FF0000"}}></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Adidas</td>
                <td>Rojo</td>
                <td className="text-center">M</td>
                <td>
                  <i className="fa-solid fa-pen-to-square" style={{color: "#e28743"}}></i>&nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#FF0000"}}></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Puma</td>
                <td>Verde</td>
                <td className="text-center">L</td>
                <td>
                  <i className="fa-solid fa-pen-to-square" style={{color: "#e28743"}}></i>&nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#FF0000"}}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
