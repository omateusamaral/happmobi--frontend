import { Routes } from '@angular/router';
import { LoginComponent, HomeComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
