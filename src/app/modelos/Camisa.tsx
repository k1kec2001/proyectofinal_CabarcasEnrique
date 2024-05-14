export class Camisa{
    public codCamisa : number;
    public marcaCamisa : string;
    public colorCamisa : string;
    public tallaCamisa : string;



    
    
    constructor(codc:number, marc:string, colo:string, tall:string){
        this.codCamisa=codc;
        this.marcaCamisa=marc;
        this.colorCamisa=colo;
        this.tallaCamisa=tall;
    }
}