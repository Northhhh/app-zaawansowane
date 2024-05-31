import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

import { MenuComponent } from '../menu/menu.component';

import { AuthService } from '../auth.service';

import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app.routes';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';



describe('DashboardComponent', () => {

  let component: DashboardComponent;

  let fixture: ComponentFixture<DashboardComponent>;

  let authService: AuthService;



  beforeEach(() => {

    TestBed.configureTestingModule({

      declarations: [],

      providers: [AuthService, provideRouter(routes), { provide: ComponentFixtureAutoDetect, useValue: true }],

      imports: [DashboardComponent, MenuComponent],

    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);

    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should display the menu after logging in', async() => {
    component.isLoggedIn = true; //symulujemy zalogowanie się
    
    fixture.detectChanges(); // Zaktualizuj widok

    const menu = fixture.debugElement.query(By.css('app-menu'));

    expect(menu).toBeTruthy();

  });

  it('should hide the menu after logging out', async() => {
    component.isLoggedIn = false; //symulujemy wylogowanie

    fixture.detectChanges(); // Zaktualizuj widok

    const menu = fixture.debugElement.query(By.css('app-menu'));

    expect(menu).toBeFalsy();

  });

});