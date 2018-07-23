import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {

  private signValue;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.signValue = true;
  }

  signIn(form: NgForm) {
    console.log(form.value);
  }

  changeComponent() {
    this.loginService.emitChange(this.signValue);
  }

}
