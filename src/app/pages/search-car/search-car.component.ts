import { Component } from '@angular/core';
import { CollapseComponent } from '../../components';

@Component({
  selector: 'app-search-car',
  standalone: true,
  imports: [CollapseComponent],
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css',
})
export class SearchCarComponent {}
