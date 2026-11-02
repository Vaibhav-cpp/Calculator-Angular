import { Routes } from '@angular/router';
import { Calculator } from './calculator/calculator';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'calculator',
        pathMatch: 'full'
    },
    {
        path: 'calculator',
        component: Calculator
    },
    {
        path:'**',
        redirectTo: 'calculator'
    }
];
