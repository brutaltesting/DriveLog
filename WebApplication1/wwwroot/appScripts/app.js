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
var router_deprecated_1 = require('@angular/router-deprecated');
var driver_service_1 = require('./driver.service');
var driver_component_1 = require('./driver.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Körjournal";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n        <p>app.ts</p>\n        <a [routerLink]=\"['Driver']\">Driver</a>\n        <router-outlet></router-outlet>",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, driver_component_1.DriverComponent],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                driver_service_1.DriverService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/driver',
                name: 'Driver',
                component: driver_component_1.DriverComponent,
                useAsDefault: false
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
