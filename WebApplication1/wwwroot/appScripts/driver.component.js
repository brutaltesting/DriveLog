"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var driver_service_1 = require('./driver.service');
var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());
exports.Driver = Driver;
var Company = (function () {
    function Company() {
    }
    return Company;
}());
exports.Company = Company;
var Car = (function () {
    function Car() {
    }
    return Car;
}());
exports.Car = Car;
var DriverComponent = (function () {
    function DriverComponent(driverService) {
        this.driverService = driverService;
        this.drivers = [];
        this.driver = { id: 1, name: 'Klas F', socialsec: '740909-0909' };
        this.company = { id: 1, name: 'Alskami AB', orgnumber: '556677-8899' };
        this.car = { regnr: "ABC123", inDutyCar: "Ja" };
    }
    DriverComponent.prototype.getDrivers = function () {
        var _this = this;
        this.driverService.getDrivers()
            .then(function (drivers) { return _this.drivers = drivers; });
        return this.drivers;
    };
    DriverComponent.prototype.ngOnInit = function () {
        this.drivers = this.getDrivers();
    };
    ;
    DriverComponent = __decorate([
        core_1.Component({
            selector: 'driver-section',
            providers: [driver_service_1.DriverService],
            template: "<table>\n    <tr> <th>F\u00F6rare </th><th>F\u00F6retag</th><th>Bil</th> </tr>    \n    <tr><td> {{driver.name}}</td><td>{{company.name}}</td><td>{{car.regnr}}</td></tr> \n    <tr><td>{{driver.socialsec}}</td><td>{{company.orgnumber}}</td></tr>\n    </table> \n    <ul>\n        <li *ngFor=\"let drv of drivers;\">{{drv.name}}</li>\n    </ul>\n"
        }), 
        __metadata('design:paramtypes', [driver_service_1.DriverService])
    ], DriverComponent);
    return DriverComponent;
}());
exports.DriverComponent = DriverComponent;
