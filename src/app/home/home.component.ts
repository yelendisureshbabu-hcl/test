import { Component, EventEmitter, Output } from '@angular/core';

import { GetCityCoordinatesService } from '../services/get-city-coordinates.service';
import { cityError } from '../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cityNameModel: string;
  lat: number;
  lng: number;
  cityError: string;
  @Output() receiveCoordinatesEvent = new EventEmitter<{ "lat": number, "lng": number }>();
  constructor(private GetCityCoordinatesService: GetCityCoordinatesService) { }

  onSubmit() {
    this.GetCityCoordinatesService.getCoordinates(this.cityNameModel).subscribe((res: any) => {
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
        this.cityError = cityError;
        this.receiveCoordinatesEvent.emit({ "lat": this.lat, "lng": this.lng });
      }
    },
      (error) => {
        this.cityError = cityError;
      }
    );

  }

}
