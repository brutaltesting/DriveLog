"use strict";
///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_1 = require('./app');
require('rxjs/Rx');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS]);
//bootstrap(DriverComponent, [HTTP_PROVIDERS, DriverService]); 
