import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CURRENCY_URL } from '../config/currency.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'currency-converter';
  apiUrl = inject(CURRENCY_URL)
  http = inject(HttpClient)

  data$ = this.http.get(this.apiUrl+"/EUR")

}
