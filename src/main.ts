import Airline from "./classes-and-objects/Airline";
import Flight, { City } from "./classes-and-objects/Flight";
import Passenger, { Gender } from "./classes-and-objects/Passenger";

function showAirlineSample(): void {
    // Latam
    const latam = new Airline("Latam");
    const flight1 = new Flight("LA-223", "2025-08-15 14:30", City.Lima, City.Cusco, 300);
    const flight2 = new Flight("LA-224", "2025-08-15 14:30", City.Lima, City.Ica, 150);
    const flight3 = new Flight("LA-225", "2025-08-15 14:30", City.Lima, City.Caracas, 300);
    latam.addFlight(flight1);
    latam.addFlight(flight2);
    latam.addFlight(flight3);
    latam.show();
    // Avianca
    const avianca = new Airline("Avianca");
    const flight4 = new Flight("AV-223", "2025-08-15 14:30", City.Lima, City.Madrid, 200);
    const flight5 = new Flight("AV-224", "2025-08-15 14:30", City.Lima, City.Barcelona, 250);
    const flight6 = new Flight("AV-225", "2025-08-15 14:30", City.Lima, City.Bogota, 300);
    avianca.addFlight(flight4);
    avianca.addFlight(flight5);
    avianca.addFlight(flight6);
    avianca.removeFlight(flight1);
    avianca.removeFlight(flight4);
    avianca.show();
    // Iberia
    const iberia = new Airline("Iberia");
    const flight7 = new Flight("IB-223", "2025-08-15 14:30", City.Lima, City.Paris, 200);
    const flight8 = new Flight("IB-224", "2025-08-15 14:30", City.Lima, City.NewYork, 200);
    const flight9 = new Flight("IB-225", "2025-08-15 14:30", City.Lima, City.London, 300);
    iberia.addFlight(flight7);
    iberia.addFlight(flight8);
    iberia.addFlight(flight9);
    iberia.removeFlight(flight7);
    iberia.removeFlight(flight8);
    iberia.removeFlight(flight9);
    iberia.show();
}

// showAirlineSample();

function showFlightSample(): void {
    // LA-226
    const flight10 = new Flight("LA-226", "2025-08-15 14:30", City.Lima, City.Paris, 300);
    const passenger1 = new Passenger("Carlos Ruiz", Gender.Male, 30, "71234567", "987654321");
    const passenger2 = new Passenger("Ana Torres", Gender.Female, 17, "78901234", "912345678");
    const passenger3 = new Passenger("Juan Pérez", Gender.Male, 70, "12345678", "998877665");
    const passenger4 = new Passenger("María Rodríguez", Gender.Female, 25, "87654321", "965432109");
    flight10.addPassenger(passenger1);
    flight10.addPassenger(passenger2);
    flight10.addPassenger(passenger3);
    flight10.addPassenger(passenger4);
    flight10.show();
    // AV-226
    const flight11 = new Flight("AV-226", "2025-08-15 14:30", City.Lima, City.Cusco, 300);
    const passenger5 = new Passenger("Ramiro Suárez", Gender.Male, 30, "71234567", "987654321");
    const passenger6 = new Passenger("Emilia Martínez", Gender.Female, 17, "78901234", "912345678");
    const passenger7 = new Passenger("Rosa González", Gender.Female, 70, "12345678", "998877665");
    const passenger8 = new Passenger("Luisa Pérez", Gender.Female, 25, "87654321", "965432109");
    flight11.addPassenger(passenger5);
    flight11.addPassenger(passenger6);
    flight11.addPassenger(passenger7);
    flight11.addPassenger(passenger8);
    flight11.removePassenger(passenger6);
    flight11.removePassenger(passenger8);
    flight11.removePassenger(passenger1);
    flight11.removePassenger(passenger2);
    flight11.show();
    // IB-226
    const flight12 = new Flight("IB-226", "2025-08-15 14:30", City.Lima, City.NewYork, 300);
    const passenger9 = new Passenger("Saúl Martínez", Gender.Male, 30, "71234567", "987654321");
    const passenger10 = new Passenger("Camila Torres", Gender.Female, 17, "78901234", "912345678");
    const passenger11 = new Passenger("Ana González", Gender.Female, 70, "12345678", "998877665");
    const passenger12 = new Passenger("Ramiro Suárez", Gender.Male, 25, "87654321", "965432109");
    flight12.addPassenger(passenger9);
    flight12.addPassenger(passenger10);
    flight12.addPassenger(passenger11);
    flight12.addPassenger(passenger12);
    flight12.removePassenger(passenger9);
    flight12.removePassenger(passenger10);
    flight12.removePassenger(passenger11);
    flight12.removePassenger(passenger12);
    flight12.show();
}

// showFlightSample();

function showPassengerSample(): void {
    const passenger13 = new Passenger("Carlos Ruiz", Gender.Male, 30, "71234567", "987654321");
    passenger13.getAgeGroup();
    passenger13.needsAssistance();
    passenger13.show();
    const passenger14 = new Passenger("Ana Torres", Gender.Female, 17, "78901234", "912345678");
    passenger14.getAgeGroup();
    passenger14.needsAssistance();
    passenger14.show();
    const passenger15 = new Passenger("Juan Pérez", Gender.Male, 70, "12345678", "998877665");
    passenger15.getAgeGroup();
    passenger15.needsAssistance();
    passenger15.show();
}

// showPassengerSample();
