import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSettingsBannerComponent } from './budget-settings-banner.component';

describe('BudgetSettingsBannerComponent', () => {
  let component: BudgetSettingsBannerComponent;
  let fixture: ComponentFixture<BudgetSettingsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetSettingsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetSettingsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
