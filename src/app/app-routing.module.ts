import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputLoginComponent } from './components/input-login/input-login.component';
import { LoginCommponentComponent } from './components/login-commponent/login-commponent.component';
import { SignInViewComponent } from './components/sign-in-view/sign-in-view.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
  {
    path: '',
    component: SignInViewComponent
  },
  {
    path: 'transactions',
    component: TransactionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
