import { SignUpViewComponent } from './components/login/sign-up/sign-up-view/sign-up-view.component';
import { TransactionViewComponent } from './components/transactions/transaction-view/transaction-view.component';
import { IndividualTransactionViewComponent } from './components/transactions/individual-transaction/individual-transaction-view/individual-transaction-view.component';
import { ReportsViewComponent } from './components/reports/reports-view/reports-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputLoginComponent } from './components/login/input-login/input-login.component';
import { LoginCommponentComponent } from './components/login/login-component/login-commponent.component';
import { SignInViewComponent } from './components/login/sign-in-view/sign-in-view.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { DashboardViewComponent } from './components/dashboard/dashboard-view/dashboard-view.component';
import { ExpenseViewComponent } from './components/expense/expense-view/expense-view.component';
import { SettingsViewComponent } from './components/settings/settings-view/settings-view.component';
import { AuthGuard } from './guards/auth.guard';
import { SetBudgetViewComponent } from './components/settings/set-budget/set-budget-view/set-budget-view.component';

const routes: Routes = [
  {
    path: '',
    component: SignInViewComponent
  },
  {
    path: 'sign-up',
    component: SignUpViewComponent
  },
  {
    path: 'transactions',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TransactionViewComponent
      },
      {
        path: ':id',
        component: IndividualTransactionViewComponent
      }
    ]
  },
  {
    path: 'reports',
    canActivate: [AuthGuard],
    component: ReportsViewComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardViewComponent
  },
  {
    path: 'expense',
    canActivate: [AuthGuard],
    component: ExpenseViewComponent
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SettingsViewComponent
      },
      {
        path: 'set-budget',
        component: SetBudgetViewComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
