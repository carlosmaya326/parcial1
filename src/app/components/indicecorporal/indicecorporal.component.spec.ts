import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicecorporalComponent } from './indicecorporal.component';

describe('IndicecorporalComponent', () => {
  let component: IndicecorporalComponent;
  let fixture: ComponentFixture<IndicecorporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicecorporalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicecorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
