import { Component, ChangeDetectorRef } from '@angular/core';
import { GetCityCoordinatesService } from './get-city-coordinates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model: any = {};
  lat: any;
  lng: any;
  cityError: string;
  constructor(private GetCityCoordinatesService: GetCityCoordinatesService) {

  }

  onSubmit() {
    this.GetCityCoordinatesService.getCoordinates(this.model.cityName).subscribe((res: any) => {
      this.lat = res.results[0].geometry.location.lat;
      this.lng = res.results[0].geometry.location.lng;

    },
      (error) => {
        this.cityError = "invalid city name,Please give valid city name";

      }
    );

  }
}
