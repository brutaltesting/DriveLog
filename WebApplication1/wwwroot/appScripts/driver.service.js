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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var DriverService = (function () {
    function DriverService(http) {
        this.http = http;
        this.driversUrl = 'http://localhost:57177/api/driver';
    }
    DriverService.prototype.getDrivers = function () {
        return this.http.get(this.driversUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DriverService.prototype.post = function (driver) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.driversUrl, JSON.stringify(driver), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    DriverService.prototype.put = function (driver) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.driversUrl + "/" + driver.id;
        return this.http
            .put(url, JSON.stringify(driver), { headers: headers })
            .toPromise()
            .then(function () { return driver; })
            .catch(this.handleError);
    };
    DriverService.prototype.save = function (driver) {
        if (driver.id) {
            return this.put(driver);
        }
        return this.post(driver);
    };
    DriverService.prototype.handleError = function (error) {
        console.error('An error occured in service', error);
        return Promise.reject(error.message || error);
    };
    DriverService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DriverService);
    return DriverService;
}());
exports.DriverService = DriverService;
