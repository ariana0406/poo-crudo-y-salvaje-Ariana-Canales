import { showAsteriskLine } from "../utils/logs";

export enum Gender {
    Male = 'Masculino',
    Female = 'Femenino'
}

export default class Passenger {
    name: string;
    gender: Gender;
    age: number;
    idCard: string;
    phone: string;

    constructor(name: string, gender: Gender, age: number, idCard: string, phone: string) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.idCard = idCard;
        this.phone = phone;
    }

    show(): void {
        showAsteriskLine();
        console.log(`* Nombre: ${this.name}`);
        console.log(`* Genero: ${this.gender}`);
        console.log(`* Edad: ${this.age}`);
        console.log(`* Cédula: ${this.idCard}`);
        console.log(`* Teléfono: ${this.phone}`);
        showAsteriskLine();
    }

    getAgeGroup(): void { 
        let ageGroup = '';
        if (this.age < 12) {
            ageGroup = 'Niño'
        } else if (this.age < 18) {
            ageGroup = 'Adolescente'
        } else if (this.age < 65) {
            ageGroup = 'Adulto'
        } else {
            ageGroup = 'Adulto Mayor'
        }
        console.log(`>> [${this.name}] Grupo de edad: ${ageGroup}`);
    }

    needsAssistance(): void {
        console.log(`>> [${this.name}] Nécesita asistencia: ${this.age < 5 || this.age > 70}`);
    }
}