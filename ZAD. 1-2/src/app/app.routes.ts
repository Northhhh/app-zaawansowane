import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: { title: 'Logowanie' }
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Kokpit' }
    }
];
