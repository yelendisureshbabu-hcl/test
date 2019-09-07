import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent {
  @Input() latitude: number;
  @Input() longitude: number;

  constructor() {

  }

}
