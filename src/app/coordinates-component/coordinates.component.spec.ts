import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCoordianteComponent } from './coordiantes.component';

describe('DisplayComponentComponent', () => {
  let component: DisplayCoordianteComponent;
  let fixture: ComponentFixture<DisplayCoordianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCoordianteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCoordianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
