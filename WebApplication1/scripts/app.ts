import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DriverService } from './driver.service';
import { DriverComponent } from './driver.component';

@Component({

    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <p>app.ts</p>
        <a [routerLink]="['Driver']">Driver</a>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, DriverComponent],
    providers: [
        ROUTER_PROVIDERS,
        DriverService]

})

@RouteConfig([
    {
        path: '/driver',
        name: 'Driver',
        component: DriverComponent,
        useAsDefault: false
    }
])

export class AppComponent {
    title = "Körjournal";
}