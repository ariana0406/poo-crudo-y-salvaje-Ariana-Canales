import Flight from "./flight/Flight";
import { showAsteriskLine } from "../utils/logs";

export default class Airline {
    name: string;
    flights: Flight[];

    constructor(name: string) {
        this.name = name;
        this.flights = [];
    }

    show(): void {
        showAsteriskLine();
        console.log(`* Nombre de la aerolínea: ${this.name}`);
        console.log("* Vuelos:");
        this.showFlights();
        showAsteriskLine();
    }

    showFlights(): void {
        if (this.flights.length === 0) {
            console.log("\t- En esta aerolínea aún no se han registrado vuelos.");
            return;
        }
        const flightsStringified = this.flights.map(flight => `\t[${flight.flightNumber}] Horario: ${flight.flightschedule}, Ruta: ${flight.origin} -> ${flight.destination}`).join('\n');
        console.log(flightsStringified);
    }

    addFlight(flight: Flight): void {
        if (this.flights.includes(flight)) {
            console.log(`>> [${this.name}] Error: El vuelo ${flight.flightNumber} ya existe en la aerolínea.`);
            return;
        }
        this.flights.push(flight);
        console.log(`>> [${this.name}] Se agregó el vuelo ${flight.flightNumber}`);
    }

    removeFlight(flight: Flight): void {
        if (!this.flights.includes(flight)) {
            console.log(`>> [${this.name}] Error: El vuelo ${flight.flightNumber} no existe en la aerolínea.`);
            return;
        }
        this.flights = this.flights.filter(f => f !== flight);
        console.log(`>> [${this.name}] Se eliminó el vuelo ${flight.flightNumber}`);
    }
}   
