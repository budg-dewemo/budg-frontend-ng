import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBudgetButtonComponent } from './set-budget-button.component';

describe('SetBudgetButtonComponent', () => {
  let component: SetBudgetButtonComponent;
  let fixture: ComponentFixture<SetBudgetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetBudgetButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetBudgetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
