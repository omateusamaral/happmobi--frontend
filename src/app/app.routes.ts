import { Routes } from '@angular/router';
import { LoginComponent, HomeComponent, SearchCarComponent } from './pages';

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
    path: 'search-car',
    component: SearchCarComponent,
  },
];
