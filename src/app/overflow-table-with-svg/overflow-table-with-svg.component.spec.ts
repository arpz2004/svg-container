import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowTableWithSvgComponent } from './overflow-table-with-svg.component';

describe('OverflowTableWithSvgComponent', () => {
  let component: OverflowTableWithSvgComponent;
  let fixture: ComponentFixture<OverflowTableWithSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverflowTableWithSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowTableWithSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
