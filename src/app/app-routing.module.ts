import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputLoginComponent } from './components/input-login/input-login.component';

const routes: Routes = [
  {
    path: 'input-login',
    component: InputLoginComponent
  }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
