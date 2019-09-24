import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-with-svg',
  templateUrl: './table-with-svg.component.html',
  styleUrls: ['./table-with-svg.component.scss']
})
export class TableWithSvgComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
