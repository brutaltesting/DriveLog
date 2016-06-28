import { Component, OnInit } from '@angular/core';
import { DriverService } from './driver.service';

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
    //directives: 
    template: `<table>
    <tr> <th>Förare </th><th>Företag</th><th>Bil</th> </tr>    
    <tr><td> {{driver.name}}</td><td>{{company.name}}</td><td>{{car.regnr}}</td></tr> 
    <tr><td>{{driver.socialsec}}</td><td>{{company.orgnumber}}</td></tr>
    </table> 
    <ul>
        <li *ngFor="let drv of drivers;">{{drv.name}}</li>
    </ul>
`

})


export class DriverComponent implements OnInit {
    drivers: Driver[] = [];

    constructor(private driverService: DriverService) {
    }

    driver: Driver = { id: 1, name: 'Klas F', socialsec: '740909-0909' };
    company: Company = { id: 1, name: 'Alskami AB', orgnumber: '556677-8899' };
    car: Car = { regnr: "ABC123", inDutyCar: "Ja" }

    getDrivers() {
        this.driverService.getDrivers()
            .then(drivers => this.drivers = drivers);
        return this.drivers;

    }

    ngOnInit() {
        this.drivers = this.getDrivers();
    };

}
