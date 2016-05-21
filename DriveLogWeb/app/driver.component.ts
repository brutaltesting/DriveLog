import { Component } from '@angular/core';

export class Driver {
    id: number;
    name: string;
    socialsec: string;
}
export class Company {
    id: number;
    name: string;
    orgnumber: string;
}
export class Car {
    regnr: string;
    inDutyCar: string;

}
@Component({
    selector: 'driver-section',
    template: `<table>
    <tr> <th>Förare </th><th>Företag</th><th>Bil</th> </tr>    
    <tr><td> {{driver.name}}</td><td>{{company.name}}</td><td>{{car.regnr}}</td></tr> 
    <tr><td>{{driver.socialsec}}</td><td>{{company.orgnumber}}</td></tr>
    </table> 

 
`
})


export class DriverComponent {
    driver: Driver = { id: 1, name: 'Klas F', socialsec: '740909-0909' };
    company: Company = { id: 1, name: 'Alskami AB', orgnumber: '556677-8899' };
    car: Car = { regnr: "ABC123", inDutyCar:"Ja" }
    public drivers = DRIVERS;
}

var DRIVERS: Driver[] = [
    { id: 1, name: 'Klas F', socialsec: '740909-0909' },
    { id: 2, name: 'Janne Kivi', socialsec: '740218-0909' }
]


