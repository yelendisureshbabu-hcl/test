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


  constructor(private GetCityCoordinatesService: GetCityCoordinatesService,private cd: ChangeDetectorRef) {

  }

  onSubmit() {
    this.GetCityCoordinatesService.setCoordinates(this.model.cityName).subscribe((res: any) => {
      console.log("res", res.results[0].geometry.location);
        this.lat = res.results[0].geometry.location.lat;
        this.lng = res.results[0].geometry.location.lng;             

    },
      (error) => {
        console.log("error", error);

      }
    );

  }
}
