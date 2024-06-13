import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelecOptions } from '../../models/main-models';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() options: SelecOptions = {};
  @Input() value: string = '';
  // emetto un evento quando il valore cambia
  @Output() valueChange = new EventEmitter<string>();

  // ricevo le chiavi dell'oggetto options
  get keys(): string[] {
    return Object.keys(this.options);
  }

  // handle dell'emissione dell'evento
  setSelectedValue(value:Event): void {
    const inputElement = value.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }

}
