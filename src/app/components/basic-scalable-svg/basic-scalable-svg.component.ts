import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basic-scalable-svg',
  templateUrl: './basic-scalable-svg.component.html',
  styleUrls: ['./basic-scalable-svg.component.scss']
})
export class BasicScalableSvgComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
