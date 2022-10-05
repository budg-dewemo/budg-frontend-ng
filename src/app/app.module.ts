import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputLoginComponent } from './components/input-login/input-login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SignInButtonComponent } from './components/sign-in-button/sign-in-button.component';
import { SignInViewComponent } from './components/sign-in-view/sign-in-view.component';
import { LoginCommponentComponent } from './components/login-commponent/login-commponent.component';
import { ToastNotifComponent } from './components/toast-notif/toast-notif.component';
import { CurrentBalanceComponent } from './components/current-balance/current-balance.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';


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
    BottomNavbarComponent
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
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
