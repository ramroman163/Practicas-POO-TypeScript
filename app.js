var Vuelo = /** @class */ (function () {
    function Vuelo(origen, destino, cantidadPasajeros, idVuelo, avion) {
        this.origen = origen;
        this.destino = destino;
        this.cantidadPasajeros = cantidadPasajeros;
        this.idVuelo = idVuelo;
        this.avion = avion;
    }
    Vuelo.prototype.getOrigen = function () {
        return this.origen;
    };
    Vuelo.prototype.setOrigen = function (origen) {
        this.origen = origen;
    };
    Vuelo.prototype.getDestino = function () {
        return this.destino;
    };
    Vuelo.prototype.setDestino = function (destino) {
        this.destino = destino;
    };
    Vuelo.prototype.getCantidadPasajeros = function () {
        return this.cantidadPasajeros;
    };
    Vuelo.prototype.setCantidadPasajeros = function (cantidadPasajeros) {
        this.cantidadPasajeros = cantidadPasajeros;
    };
    Vuelo.prototype.getIdVuelo = function () {
        return this.idVuelo;
    };
    Vuelo.prototype.setIdVuelo = function (idVuelo) {
        this.idVuelo = idVuelo;
    };
    Vuelo.prototype.getAvion = function () {
        return this.avion;
    };
    Vuelo.prototype.setAvion = function (avion) {
        this.avion = avion;
    };
    return Vuelo;
}());
console.log("VUELO N1");
var vueloHoy = new Vuelo("Buenos Aires", "Roma", 35, 3456, "Boeing 707");
console.log("Origen: " + vueloHoy.getOrigen());
console.log("Destino: " + vueloHoy.getDestino());
console.log("Cantidad de pasajeros: " + vueloHoy.getCantidadPasajeros());
console.log("ID de vuelo: " + vueloHoy.getIdVuelo());
console.log("Modelo avion: " + vueloHoy.getAvion());
console.log("VUELO N2");
var vueloMañana = new Vuelo("Buenos Aires", "Rio de Janeiro", 32, 3489, "Boeing 737");
console.log("Origen: " + vueloMañana.getOrigen());
console.log("Destino: " + vueloMañana.getDestino());
console.log("Cantidad de pasajeros: " + vueloMañana.getCantidadPasajeros());
console.log("ID de vuelo: " + vueloMañana.getIdVuelo());
console.log("Modelo avion: " + vueloMañana.getAvion());
