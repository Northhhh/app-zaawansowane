import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogowanieComponent } from './logowanie/logowanie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogowanieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-zaawansowane';
}
