import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GetCityCoordinatesService {
  apiURL: string = url;

  constructor(private httpClient: HttpClient) { }
  getCoordinates(cityName: string) {
    return this.httpClient.get(`${this.apiURL}` + cityName);
  }
}
