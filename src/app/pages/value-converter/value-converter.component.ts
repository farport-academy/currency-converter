import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { SelectComponent } from '../../core/components/select/select.component';
import { ConverterService } from '../../core/services/converter.service';
import { TableComponent } from '../../core/components/table/table.component';

@Component({
  selector: 'app-value-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectComponent, TableComponent, CurrencyPipe],
  templateUrl: './value-converter.component.html',
  styleUrl: './value-converter.component.scss'
})
export class ValueConverterComponent{
  converter = inject(ConverterService)
  
  // valori di default per inizializzare il componente
  fromCurrency: string = 'EUR'
  toCurrency: string = 'USD'
  value: number = 1
  rate: number  = 1
  // observable per la gesione dei tassi di cambio
  rates$ = this.converter.getCurrencyRates(this.toCurrency).pipe(
    tap((_) => {
      // aggiorna il tasso di cambio e il valore di output
      this.rate = this.converter.getCurrentRate(this.fromCurrency)
      this.outputValue = this.calcValue(this.value, this.rate)
    })
  )
  // opzione per le select
  optionCodes = this.converter.getCurrencyOptions()
  outputValue!: number 
 
  updateFromCurrency(value:string): void {
    // aggiorno la lista degli altri valori dei tassi di cambio
    this.rates$ = this.converter.getCurrencyRates(value)
    this.updateOutput()
  }

  updateToCurrency(value:string): void {
    // aggiorno il tasso di cambio 
    this.rate = this.converter.getCurrentRate(value)
    this.updateOutput()
  }

  
  updateValue(event:Event): void {
    //aggiorno il valore del tasso di cambio
    const inputElement = event.target as HTMLInputElement;
    this.value = parseFloat(inputElement.value)
    this.updateOutput()
  }

  updateOutput():void{
    // aggiorno il valore visualizzato
    this.outputValue = this.calcValue(this.value, this.rate)
  }

  calcValue(from:number, to:number){
    return from * to
  }
  
}
