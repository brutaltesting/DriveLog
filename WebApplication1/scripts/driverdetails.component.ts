import { Component, OnInit } from '@angular/core';
import { DriverComponent } from './driver.component';

@Component({
    selector: 'driver-details',
    templateUrl: './driverdetails.html',
    directives: [DriverComponent]

})
export class DriverDetails {
    id: number;
    name: string;
    socialsec: string;
}