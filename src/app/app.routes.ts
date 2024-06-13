import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/value-converter/value-converter.component').then(m => m.ValueConverterComponent)
    }
];
