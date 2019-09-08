import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { GetCityCoordinatesService } from '../services/get-city-coordinates.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  model: any = {};
  lat: any;
  lng: any;
  cityError: string;
  @Output() receiveCoordinatesEvent = new EventEmitter<{"lat":any,"lng":any}>();
  constructor(private GetCityCoordinatesService: GetCityCoordinatesService) { }


  onSubmit() {
    this.GetCityCoordinatesService.getCoordinates(this.model.cityName).subscribe((res: any) => {
      if (res.status === "OK") {
        this.lat = res.results[0].geometry.location.lat;
        this.lng = res.results[0].geometry.location.lng;
        this.cityError = "";
        this.receiveCoordinatesEvent.emit({ "lat": this.lat, "lng": this.lng });
      }
      //  incase of invalid city name
      if (res.status === "ZERO_RESULTS") {
        this.lat = null;
        this.lng = null;
        this.cityError = "invalid city name,Please give valid city name";
        this.receiveCoordinatesEvent.emit({ "lat": this.lat, "lng": this.lng });
      }

    },
      (error) => {
        this.cityError = "invalid city name,Please give valid city name";

      }
    );

  }

}
