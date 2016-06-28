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
var Trip = (function () {
    function Trip() {
    }
    return Trip;
}());
exports.Trip = Trip;
var TripsComponent = (function () {
    function TripsComponent() {
        this.t1 = { id: 1, startdate: new Date(), distance: 74.3, destination: "Flen" };
        this.trips = TRIPS;
    }
    TripsComponent = __decorate([
        core_1.Component({
            selector: 'trips-section',
            template: "<table>\n    <tr> \n<th>Datum </th><th>M\u00E4tarst\u00E4llning start</th> <th>M\u00E4tarst\u00E4llning slut</th> <th>Destination</th> <th>K\u00F6rstr\u00E4cka</th></tr>    \n    <tr *ngFor = \"let leg of trips\">\n<td> {{leg.startdate}}</td><td>start</td><td>stop</td><td>{{leg.destination}}</td><td>{{leg.distance}}</td></tr> \n    </table> \n"
        }), 
        __metadata('design:paramtypes', [])
    ], TripsComponent);
    return TripsComponent;
}());
exports.TripsComponent = TripsComponent;
var TRIPS = [
    { id: 1, startdate: new Date(), distance: 74.3, destination: "Flen" },
    { id: 2, startdate: new Date(), distance: 144.8, destination: "Örebro" }
];
