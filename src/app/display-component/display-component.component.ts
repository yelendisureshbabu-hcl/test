import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { GetCityCoordinatesService } from '../get-city-coordinates.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {
  @Input() latitude: any;
  @Input() longitude: any;

  constructor(private GetCityCoordinatesService: GetCityCoordinatesService) {


  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes)

  }
}
