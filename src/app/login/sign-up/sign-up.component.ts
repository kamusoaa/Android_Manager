import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private signValue;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.signValue = false;
  }

  signUp(form: NgForm) {
    console.log(form.value);
  }

  changeComponent() {
    this.loginService.emitChange(this.signValue);
  }

}
