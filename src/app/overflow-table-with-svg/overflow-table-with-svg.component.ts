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
  @ViewChild('tableContainer', { static: false }) tableContainer: ElementRef;
  @ViewChild('tableWrapper', { static: false }) tableWrapper: ElementRef;
  @ViewChild('table', { static: false }) table: ElementRef;
  @ViewChild('row', { static: false }) row: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.positionTriangle();
    $(this.tableWrapper.nativeElement).scroll(() => {
      this.positionTriangle();
    });
  }

  positionTriangle() {
    const tableContainerWidth = $(this.tableContainer.nativeElement).width();
    const tableWidth = $(this.table.nativeElement).width();
    const scrollPosiiton = $(this.tableWrapper.nativeElement).scrollTop();
    const rowHeight = $(this.row.nativeElement).height();
    const rowPosition = $(this.row.nativeElement).position();
    $(this.triangle.nativeElement).css({ top: rowPosition.top - scrollPosiiton, left: `calc(100% - ${tableContainerWidth - tableWidth}px)`, height: rowHeight });
  }

}
