export class Camisa {
  public codCamisa: number;
  public codmarcaCamisa: string;
  public colorCamisa: string;
  public tallaCamisa: string;

  constructor(codc: number, codm: string, colo: string, tall: string) {
    this.codCamisa = codc;
    this.codmarcaCamisa = codm;
    this.colorCamisa = colo;
    this.tallaCamisa = tall;
  }
}
