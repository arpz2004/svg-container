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

  @ViewChild('tableContainer', { static: false }) tableContainer: ElementRef;
  @ViewChild('tableWrapper', { static: false }) tableWrapper: ElementRef;
  @ViewChild('table', { static: false }) table: ElementRef;
  @ViewChild('row', { static: false }) row: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.positionTriangle();
    $(this.tableWrapper.nativeElement).on('scroll resize', () => {
      this.positionTriangle();
    });
  }

  positionTriangle() {
    const tableContainerWidth = $(this.tableContainer.nativeElement).width();
    const tableWidth = $(this.table.nativeElement).width();
    const tableWrapperHeight = $(this.tableWrapper.nativeElement).height();
    const scrollPosiiton = $(this.tableWrapper.nativeElement).scrollTop();
    const row = $(this.row.nativeElement);
    let rowHeight = row.height();
    const rowPosition = row.position();
    const triangleYPosition = rowPosition.top - scrollPosiiton;
    const triangleXPosition = `calc(100% - ${tableContainerWidth - tableWidth}px)`;
    if (triangleYPosition < 0) {
      rowHeight = rowHeight + triangleYPosition;
    } else if (triangleYPosition + rowHeight > tableWrapperHeight) {
      rowHeight = tableWrapperHeight - triangleYPosition;
    }
    const triangleAboveOrBelowTable = rowHeight <= 0;
    const triangle = row.children().find('svg')[0];
    $(triangle).css({ top: triangleYPosition > 0 ? triangleYPosition : 0, left: triangleXPosition, height: rowHeight, display: triangleAboveOrBelowTable ? 'none' : 'block' });
  }

}
