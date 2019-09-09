import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number;
  lng: number;
  
  receiveCoordinates($event) {
    this.lat = $event.lat;
    this.lng = $event.lng;
  }

}
