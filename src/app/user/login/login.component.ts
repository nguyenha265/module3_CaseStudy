import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = this.userService.user;
  login: FormGroup;
  check: string;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    });
  }

  onSubmit() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === this.login.get('email').value && this.user[i].pass === this.login.get('password').value) {
        this.user[i].status = true;
        this.check = 'true';
        this.userService.checkLogin = 'false';
        this.userService.userOnline = this.user[i];
        break;
      } else {
        this.check = 'false';
      }
    }
  }
}
