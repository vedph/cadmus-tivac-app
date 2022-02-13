import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfLocationPartFeatureComponent } from './grf-location-part-feature.component';

describe('GrfLocationPartFeatureComponent', () => {
  let component: GrfLocationPartFeatureComponent;
  let fixture: ComponentFixture<GrfLocationPartFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrfLocationPartFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfLocationPartFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
