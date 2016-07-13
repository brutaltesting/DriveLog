import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { DriverDetails } from './driverdetails.component';


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
    templateUrl: './driver.html',
    directives: [DriverDetails]

})


export class DriverComponent implements OnInit {
    drivers: DriverDetails[] = [];

    constructor(private driverService: DriverService) {
    }

    driver: DriverDetails = { id: 1, name: 'Klas F', socialsec: '740909-0909' };
    company: Company = { id: 1, name: 'Alskami AB', orgnumber: '556677-8899' };
    car: Car = { regnr: "ABC123", inDutyCar: "Ja" }

    public getDrivers() {
        this.driverService.getDrivers()
            .then(drivers => this.drivers = drivers);
        return this.drivers;

    }

    ngOnInit() {
        this.drivers = this.getDrivers();
    };

}
