import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourModuleComponent } from './tour-module.component';

describe('TourModuleComponent', () => {
  let component: TourModuleComponent;
  let fixture: ComponentFixture<TourModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
