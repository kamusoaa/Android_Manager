import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';

import { routinng} from './app.routing';
import { AppComponent } from './app.component';
import { LogoComponent } from './login/logo/logo.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule,
    routinng,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

