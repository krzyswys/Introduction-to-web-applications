import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaskedSmallComponent } from './basked-small.component';

describe('BaskedSmallComponent', () => {
  let component: BaskedSmallComponent;
  let fixture: ComponentFixture<BaskedSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaskedSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaskedSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
