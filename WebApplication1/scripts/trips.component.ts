import { Component } from '@angular/core';

export class Trip {
    id: number;
    startdate: Date;
    distance: number;
    destination: string;

}

@Component({
    selector: 'trips-section',
    template: `<table>
    <tr> 
<th>Datum </th><th>Mätarställning start</th> <th>Mätarställning slut</th> <th>Destination</th> <th>Körsträcka</th></tr>    
    <tr *ngFor = "let leg of trips">
<td> {{leg.startdate}}</td><td>start</td><td>stop</td><td>{{leg.destination}}</td><td>{{leg.distance}}</td></tr> 
    </table> 
`
})


export class TripsComponent {
    t1: Trip = { id: 1, startdate: new Date(), distance: 74.3, destination: "Flen" };
    public trips = TRIPS;
}

var TRIPS: Trip[] = [
    { id: 1, startdate: new Date(), distance: 74.3, destination: "Flen" },
    { id: 2, startdate: new Date(), distance: 144.8, destination: "Örebro" }
]


