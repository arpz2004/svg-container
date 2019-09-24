import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSvgComponent } from './table-with-svg.component';

describe('TableWithSvgComponent', () => {
  let component: TableWithSvgComponent;
  let fixture: ComponentFixture<TableWithSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
