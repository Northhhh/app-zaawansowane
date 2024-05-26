import { Component } from "@angular/core";
import { FormsModule }    from '@angular/forms';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {

  formData = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.formData.username === 'admin' && this.formData.password === 'password') {
      this.auth.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Błąd logowania. Sprawdź dane.');
    }
  }
}
