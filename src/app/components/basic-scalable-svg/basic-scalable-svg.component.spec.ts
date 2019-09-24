import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicScalableSvgComponent } from './basic-scalable-svg.component';

describe('BasicScalableSvgComponent', () => {
  let component: BasicScalableSvgComponent;
  let fixture: ComponentFixture<BasicScalableSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicScalableSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicScalableSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
