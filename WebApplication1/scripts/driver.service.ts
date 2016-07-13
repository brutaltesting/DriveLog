import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { DriverDetails } from './driverdetails.component';


@Injectable()
export class DriverService {
    private driversUrl = 'http://localhost:57177/api/driver';
    private drivers: DriverDetails[] = [];

    constructor(private http: Http) { }

    public getDrivers(): 
        Promise<DriverDetails[]> {
                return this.http.get(this.driversUrl)
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
    }

    private post(driver: DriverDetails): Promise<DriverDetails> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.driversUrl, JSON.stringify(driver), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(driver: DriverDetails) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.driversUrl}/${driver.id}`;

        return this.http
            .put(url, JSON.stringify(driver), { headers: headers })
            .toPromise()
            .then(() => driver)
            .catch(this.handleError);
    }

    save(driver: DriverDetails): Promise<DriverDetails> {
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