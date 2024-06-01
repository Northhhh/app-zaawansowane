import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorage;
  constructor(@Inject(DOCUMENT) private document: Document,  private router: Router) { 
    this.localStorage = document.defaultView?.localStorage;
  }

  login() 
  {
    if(this.localStorage)
      this.localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    if(this.localStorage)
      {
        this.localStorage.removeItem('isLoggedIn');
        this.router.navigate(['']);
      }
  }

  isLoggedIn(): boolean {
    if(this.localStorage)
    {
      let token = this.localStorage.getItem('isLoggedIn');
      return token != null && token.length > 0;
    }
    return false;
  }
}
