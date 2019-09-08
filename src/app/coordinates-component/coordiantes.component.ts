import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coordinates-component',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class DisplayCoordianteComponent {
  @Input() latitude: number;
  @Input() longitude: number;
}
