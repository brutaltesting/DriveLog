import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Driver } from './driver.component';


@Injectable()
export class DriverService {
    private driversUrl = 'http://localhost:57177/api/driver';

    constructor(private http: Http) { }

    getDrivers(): 
        Promise<Driver[]> {
                return this.http.get(this.driversUrl)
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
    }

    private post(driver: Driver): Promise<Driver> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.driversUrl, JSON.stringify(driver), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(driver: Driver) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.driversUrl}/${driver.id}`;

        return this.http
            .put(url, JSON.stringify(driver), { headers: headers })
            .toPromise()
            .then(() => driver)
            .catch(this.handleError);
    }

    save(driver: Driver): Promise<Driver> {
        if (driver.id) {
            return this.put(driver);
        }
        return this.post(driver);
    }
    private handleError(error: any) {
        console.error('An error occured in service', error);
        return Promise.reject(error.message || error);
    }
}