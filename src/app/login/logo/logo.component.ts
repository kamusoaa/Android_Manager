import {Component, NgModule, OnInit} from '@angular/core';
import { SignInComponent} from '../sign-in/sign-in.component';
import {AppComponent} from '../../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {LoginService} from '../../services/login.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [LogoComponent, SignInComponent, SignInComponent],
  bootstrap: [AppComponent]
})

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  get signValue(): boolean {
    return this._signValue;
  }

  private _signValue = false;
  constructor(private loginService: LoginService) {
    this.loginService.changeEmitted.subscribe(data => {
      this._signValue = data;
    });
  }

  ngOnInit() {
  }

}


