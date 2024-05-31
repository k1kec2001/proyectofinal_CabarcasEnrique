export class Camisa {
  public codCamisa: number;
  public codmarcaCamisa: string;
  public colorCamisa: string;
  public tallaCamisa: string;

  constructor(codc: number, marc: string, colo: string, tall: string) {
    this.codCamisa = codc;
    this.codmarcaCamisa = marc;
    this.colorCamisa = colo;
    this.tallaCamisa = tall;
  }
}
