///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app';
import {DriverComponent} from './driver.component';
import {DriverService} from './driver.service';
import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
//bootstrap(DriverComponent, [HTTP_PROVIDERS, DriverService]);