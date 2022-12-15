class Vuelo{
    private origen: string;
    private destino: string;
    private cantidadPasajeros: number;
    private idVuelo: number;
    private avion: string;

    public getOrigen(): string {
        return this.origen;
    }

    public setOrigen(origen: string): void {
        this.origen = origen;
    }

    public getDestino(): string {
        return this.destino;
    }

    public setDestino(destino: string): void {
        this.destino = destino;
    }

    public getCantidadPasajeros(): number {
        return this.cantidadPasajeros;
    }

    public setCantidadPasajeros(cantidadPasajeros: number): void {
        this.cantidadPasajeros = cantidadPasajeros;
    }

    public getIdVuelo(): number {
        return this.idVuelo;
    }

    public setIdVuelo(idVuelo: number): void {
        this.idVuelo = idVuelo;
    }

    public getAvion(): string {
        return this.avion;
    }

    public setAvion(avion: string): void {
        this.avion = avion;
    }


    constructor(origen:string, destino:string, cantidadPasajeros: number, idVuelo:number, avion:string){
        this.origen = origen;
        this.destino = destino;
        this.cantidadPasajeros = cantidadPasajeros;
        this.idVuelo = idVuelo;
        this.avion = avion;
    }

}

console.log("VUELO N1");

let vueloHoy = new Vuelo("Buenos Aires", "Roma", 35, 3456, "Boeing 707");
console.log("Origen: " + vueloHoy.getOrigen());
console.log("Destino: " + vueloHoy.getDestino());
console.log("Cantidad de pasajeros: " + vueloHoy.getCantidadPasajeros());
console.log("ID de vuelo: " + vueloHoy.getIdVuelo());
console.log("Modelo avion: " + vueloHoy.getAvion());

console.log("VUELO N2");

let vueloMañana = new Vuelo("Buenos Aires", "Rio de Janeiro", 32, 3489, "Boeing 737");
console.log("Origen: " + vueloMañana.getOrigen());
console.log("Destino: " + vueloMañana.getDestino());
console.log("Cantidad de pasajeros: " + vueloMañana.getCantidadPasajeros());
console.log("ID de vuelo: " + vueloMañana.getIdVuelo());
console.log("Modelo avion: " + vueloMañana.getAvion());

