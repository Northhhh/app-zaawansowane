import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;

    if(!this.isLoggedIn)
    {

    }
  }
}
