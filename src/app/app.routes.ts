import { Routes } from '@angular/router';
import {
  LoginComponent,
  HomeComponent,
  FilterVehiclesComponent,
} from './pages';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'filter-vehicles',
    component: FilterVehiclesComponent,
  },
];
