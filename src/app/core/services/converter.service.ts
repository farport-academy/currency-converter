import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  CURRENCY_URL,
  CurrencyConfig,
  RateValue,
  RatesResponse,
  currencyConfig,
} from '../config/currency.config';
import { SelecOptions } from '../models/main-models';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  
  apiUrl = inject(CURRENCY_URL);
  http = inject(HttpClient);

  currencyConfig = currencyConfig;
  // state memory per i tassi di cambio
  ratesMemory: RateValue[] = [];

  // lista dei codici delle value
  get currencyConfigCodes(): string[] {
    return this.currencyConfig.map((currency) => currency.id);
  }

  // Restituisce il valore di un elemento all'interno della configurazione
  getCurrencyConfig(code: string): CurrencyConfig | undefined {
    return currencyConfig.find((currency) => currency.id === code) ;
  }
  // restitisce le opzioni per la select
  getCurrencyOptions(): SelecOptions {
    return this.currencyConfig.reduce((acc, currency) => {
      acc[currency.id] = `${currency.flag} ${currency.id}`;
      return acc;
    }, {} as SelecOptions);
  }

  // restituisce il valore di un tasso presente nella lista
  getCurrentRate(id:string): number {
    return this.ratesMemory.find((rate) => rate.id === id)?.value || 0;
  }

  // chiama le api e restituisce la lista dei tassi di cambio
  getCurrencyRates(code: string | null = null): Observable<RateValue[]> {
   return this.http
      .get<RatesResponse>(`${this.apiUrl}${code ? `/${code}` : ''}`)
      .pipe(
        map((response: RatesResponse) => {
          // filtra i valori della risposta mappando solo quelli che sono presenti nella configurazione
          // e trasformandoli in un oggetto RateValue
          const filteredResponse = Object.keys(response.rates)
          .map((key) => ({
            id: key,
            value: response.rates[key],
            flag: this.getCurrencyConfig(key)?.flag || '',
            symbol: this.getCurrencyConfig(key)?.symbol || '',
            name: this.getCurrencyConfig(key)?.name || '',
          }))
          .filter((r) => this.currencyConfigCodes.includes(r.id))
          // aggiorno l'oggetto dei valori salvati in memoria
          this.ratesMemory = filteredResponse
          // Escludo il valore passato come parametro
          return filteredResponse.filter((r) => r.id !== code)
        })
      );
  }
}
