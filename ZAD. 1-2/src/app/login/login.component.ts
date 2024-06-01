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

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.formData.username === 'admin' && this.formData.password === 'password') {
      console.log('Zalogowano pomyślnie');
      this.auth.login();
      this.isLoginFailed = false;
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Wystąpił błąd podczas logowania');
      this.isLoginFailed = true;
    }
  }
}
