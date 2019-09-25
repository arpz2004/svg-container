import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-overflow-table-with-svg',
  templateUrl: './overflow-table-with-svg.component.html',
  styleUrls: ['./overflow-table-with-svg.component.scss']
})
export class OverflowTableWithSvgComponent implements OnInit {
  faCoffee = faCoffee;

  @ViewChild('triangle', { static: false }) triangle: ElementRef;
  @ViewChild('tableWrapper', { static: false }) tableWrapper: ElementRef;
  @ViewChild('table', { static: false }) table: ElementRef;
  @ViewChild('row', { static: false }) row: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const tableWrapperWidth = $(this.tableWrapper.nativeElement).width();
    const tableWidth = $(this.table.nativeElement).width();
    const rowHeight = $(this.row.nativeElement).height();
    const rowPosition = $(this.row.nativeElement).position();
    console.log($(this.triangle.nativeElement).css({ top: rowPosition.top, left: `calc(100% - ${tableWrapperWidth - tableWidth}px)`, height: rowHeight }));
    console.log($(this.tableWrapper.nativeElement).width());
    console.log($(this.table.nativeElement).width());
  }

}
