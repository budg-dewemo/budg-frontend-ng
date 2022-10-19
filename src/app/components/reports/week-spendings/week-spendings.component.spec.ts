import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSpendingsComponent } from './week-spendings.component';

describe('WeekSpendingsComponent', () => {
  let component: WeekSpendingsComponent;
  let fixture: ComponentFixture<WeekSpendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekSpendingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekSpendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
