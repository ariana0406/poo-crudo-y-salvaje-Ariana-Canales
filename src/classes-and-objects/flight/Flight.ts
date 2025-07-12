import City from "./City";
import Passenger from "../Passenger";
import { showAsteriskLine } from "../../utils/logs";

export default class Flight {
    flightNumber: string;
    flightschedule: string;
    origin: City;
    destination: City;
    maxPassengers: number;
    passengers: Passenger[];

    constructor (flightNumber: string, flightschedule: string, origin: City, destination: City, maxPassengers: number) {
        this.flightNumber = flightNumber;
        this.flightschedule = flightschedule;
        this.origin = origin;
        this.destination = destination;
        this.maxPassengers = maxPassengers;
        this.passengers = [];
    }

    show(): void {
        showAsteriskLine();
        console.log(`* Número de vuelo: ${this.flightNumber}`);
        console.log(`* Fecha y hora: ${this.flightschedule}`);
        console.log(`* Ruta: ${this.origin} -> ${this.destination}`);
        console.log(`* Pasajeros (Máx.: ${this.maxPassengers}):`);
        this.showPassengers();
        showAsteriskLine();
    }

    showPassengers(): void {
        if (this.passengers.length === 0) {
            console.log("\t- En este vuelo aún no se han registrado pasajeros.");
            return;
        }
        const passengersStringified = this.passengers.map(passenger => `\t- (${passenger.idCard}) ${passenger.name}`).join('\n');
        console.log(passengersStringified);
    }

    addPassenger(passenger: Passenger): void {
        if (this.passengers.includes(passenger)) {
            console.log(`>> [${this.flightNumber}] Error: El pasajero ${passenger.name} ya existe en el vuelo.`);
            return;
        }
        if (this.passengers.length >= this.maxPassengers) {
            console.log(`>> [${this.flightNumber}] Error: El vuelo ${this.flightNumber} está lleno.`);
            return;
        }
        this.passengers.push(passenger);
        console.log(`>> [${this.flightNumber}] Se agregó el pasajero ${passenger.name}`);
    }

    removePassenger(passenger: Passenger): void {
        if (!this.passengers.includes(passenger)) {
            console.log(`>> [${this.flightNumber}] Error: El pasajero ${passenger.name} no existe en el vuelo.`);
            return;
        }
        this.passengers = this.passengers.filter(p => p !== passenger);
        console.log(`>> [${this.flightNumber}] Se eliminó el pasajero ${passenger.name} del vuelo.`);
    }
}