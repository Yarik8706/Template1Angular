import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiesSliderComponent } from './rewies-slider.component';

describe('RewiesSliderComponent', () => {
  let component: RewiesSliderComponent;
  let fixture: ComponentFixture<RewiesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewiesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewiesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
