import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetCityCoordinatesService {
  apiURL: string = 'http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=';
  lat: any;
  lng: any;
  private empDetailSubject = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) { }

  public setCoordinates(cityName: string) {
    console.log("city name in s", cityName, `${this.apiURL}` + cityName)
    return this.httpClient.get(`${this.apiURL}` + cityName);
  }
  getCoordinates() {
    return this.empDetailSubject.asObservable();
  }


}
