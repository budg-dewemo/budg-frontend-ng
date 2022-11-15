import { ReportsViewComponent } from './components/reports/reports-view/reports-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardViewComponent } from './components/dashboard/dashboard-view/dashboard-view.component';
// import { ExpenseViewComponent } from './components/expense/expense-view/expense-view.component';
import { InputLoginComponent } from './components/login/input-login/input-login.component';
import { LoginCommponentComponent } from './components/login/login-component/login-commponent.component';
import { SignInViewComponent } from './components/login/sign-in-view/sign-in-view.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { DashboardViewComponent } from './components/dashboard/dashboard-view/dashboard-view.component';
import { ExpenseViewComponent } from './components/expense/expense-view/expense-view.component';

const routes: Routes = [
  {
    path: '',
    component: SignInViewComponent
  },
  {
    path: 'transactions',
    component: TransactionListComponent
  },
  {
    path: 'reports',
    component: ReportsViewComponent
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent
  },
  {
    path: 'expense',
    component: ExpenseViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
