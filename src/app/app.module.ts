import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputLoginComponent } from './components/login/input-login/input-login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SignInButtonComponent } from './components/login/sign-in-button/sign-in-button.component';
import { SignInViewComponent } from './components/login/sign-in-view/sign-in-view.component';
import { LoginCommponentComponent } from './components/login/login-component/login-commponent.component';
import { ToastNotifComponent } from './components/toast-notif/toast-notif.component';
import { CurrentBalanceComponent } from './components/dashboard/current-balance/current-balance.component';
import { TransactionComponent } from './components/transactions/transaction/transaction.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { BottomNavbarComponent } from './components/dashboard/bottom-navbar/bottom-navbar.component';
import { ExpenseInputComponent } from './components/expense/expense-input/expense-input.component';
// import { DashboardViewComponent } from './components/dashboard/dashboard-view/dashboard-view.component';
import { MatOption, MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
// import { ExpenseViewComponent } from './components/expense/expense-view/expense-view.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReportsViewComponent } from './components/reports/reports-view/reports-view.component';
// import { ExpenseAddComponent } from './components/expense/expense-add/expense-add.component';

import { NgChartsModule } from 'ng2-charts';
import { WeekSpendingsComponent } from './components/reports/week-spendings/week-spendings.component';
import { MonthlySpendingsComponent } from './components/reports/monthly-spendings/monthly-spendings.component';


@NgModule({
  declarations: [
    AppComponent,
    InputLoginComponent,
    SignInButtonComponent,
    SignInViewComponent,
    LoginCommponentComponent,
    ToastNotifComponent,
    CurrentBalanceComponent,
    TransactionComponent,
    TransactionListComponent,
    BottomNavbarComponent,
    ExpenseInputComponent,
    ReportsViewComponent,
    WeekSpendingsComponent,
    MonthlySpendingsComponent
    // DashboardViewComponent,
    // ExpenseViewComponent,
    // ExpenseAddComponent
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
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
