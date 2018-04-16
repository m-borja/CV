import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userName: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signIn(form: any): void {
    // when we sign in, set the user
    // this mimics filling out a login form
    this.userService.setUser({
      name: form.utilisateur
    });

    // now **read** the user name from the service
    this.userName = this.userService.getUser().name;
  }

  signOut(): void {
    this.userService.setUser({});
    this.userName = this.userService.getUser().name;
  }
}