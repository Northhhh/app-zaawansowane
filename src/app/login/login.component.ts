import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {

  formData = {
    username: '',
    password: ''
  };

  isLoginFailed = false;
  loginCorrect = true;
  passwordCorrect = true;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.formData.username === 'admin' && this.formData.password === 'password') {
      this.auth.login();
      this.isLoginFailed = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.isLoginFailed = true;
      this.loginCorrect = this.formData.username === 'admin';
      this.passwordCorrect = this.formData.password === 'password';
    }
  }
}
