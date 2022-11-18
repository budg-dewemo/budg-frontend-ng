import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOption, MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';


import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentBalanceComponent } from './components/dashboard/current-balance/current-balance.component';
import { TransactionComponent } from './components/transactions/transaction/transaction.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { BottomNavbarComponent } from './components/dashboard/bottom-navbar/bottom-navbar.component';
import { ExpenseInputComponent } from './components/expense/expense-input/expense-input.component';
import { WeekSpendingsComponent } from './components/reports/week-spendings/week-spendings.component';
import { MonthlySpendingsComponent } from './components/reports/monthly-spendings/monthly-spendings.component';
import { DashboardViewComponent } from './components/dashboard/dashboard-view/dashboard-view.component';
import { ExpenseViewComponent } from './components/expense/expense-view/expense-view.component';
import { AddButtonComponent } from './components/expense/add-button/add-button.component';
import { ReportsViewComponent } from './components/reports/reports-view/reports-view.component';
import { SignInViewComponent } from './components/login/sign-in-view/sign-in-view.component';
import { LoginCommponentComponent } from './components/login/login-component/login-commponent.component';
import { InputLoginComponent } from './components/login/input-login/input-login.component';
import { SignInButtonComponent } from './components/login/sign-in-button/sign-in-button.component';
import { ToastNotifComponent } from './components/toast-notif/toast-notif.component';

import { AuthInterceptor } from './auth.interceptor';
import { SidenavComponent } from './components/common/sidenav/sidenav.component';
import { SettingsViewComponent } from './components/settings/settings-view/settings-view.component';
import { UserSettingsBannerComponent } from './components/settings/settings-view/user-settings-banner/user-settings-banner.component';
import { GoButtonComponent } from './components/common/go-button/go-button.component';
import { AccountSettingsComponent } from './components/settings/settings-view/account-settings/account-settings.component';
import { BudgetSettingsBannerComponent } from './components/settings/settings-view/budget-settings-banner/budget-settings-banner.component';
import { BudgetSettingsComponent } from './components/settings/settings-view/budget-settings/budget-settings.component';
import { SetBudgetViewComponent } from './components/settings/set-budget/set-budget-view/set-budget-view.component';
import { SetBudgetFormComponent } from './components/settings/set-budget/set-budget-input/set-budget-input.component';
import { SetBudgetButtonComponent } from './components/settings/set-budget/set-budget-button/set-budget-button.component';
//import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    CurrentBalanceComponent,
    TransactionComponent,
    TransactionListComponent,
    BottomNavbarComponent,
    ExpenseInputComponent,
    ReportsViewComponent,
    WeekSpendingsComponent,
    MonthlySpendingsComponent,
    DashboardViewComponent,
    ExpenseViewComponent,
    ExpenseViewComponent,
    AddButtonComponent,
    SignInViewComponent,
    LoginCommponentComponent,
    InputLoginComponent,
    SignInButtonComponent,
    ToastNotifComponent,
    SidenavComponent,
    SettingsViewComponent,
    UserSettingsBannerComponent,
    GoButtonComponent,
    AccountSettingsComponent,
    BudgetSettingsBannerComponent,
    BudgetSettingsComponent,
    SetBudgetViewComponent,
    SetBudgetFormComponent,
    SetBudgetButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgChartsModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
