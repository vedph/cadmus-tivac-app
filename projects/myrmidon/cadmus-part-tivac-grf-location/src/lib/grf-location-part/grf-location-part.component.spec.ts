import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfLocationPartComponent } from './grf-location-part.component';

describe('GrfLocationPartComponent', () => {
  let component: GrfLocationPartComponent;
  let fixture: ComponentFixture<GrfLocationPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrfLocationPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfLocationPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
