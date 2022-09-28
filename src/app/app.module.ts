import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInButtonComponent } from './components/sign-in-button/sign-in-button.component';

import { MatButtonModule }  from '@angular/material/button';
import { SignInViewComponent } from './components/sign-in-view/sign-in-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInButtonComponent,
    SignInViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
