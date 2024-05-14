export const CamiListar = () => {
  return (
    <>
    <div className="pt-3 d-flex justify-content-center">
      <div className="col-md-8">
        <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{width: "10%"}}>Código</th>
            <th style={{width: "50%"}}>Marca</th>
            <th style={{width: "20%"}}>Color</th>
            <th style={{width: "20%"}} className="text-center">Talla</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nike</td>
            <td>Blanco</td>
            <td className="text-center">XL</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Adidas</td>
            <td>Rojo</td>
            <td className="text-center">M</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Puma</td>
            <td>Verde</td>
            <td className="text-center">L</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
