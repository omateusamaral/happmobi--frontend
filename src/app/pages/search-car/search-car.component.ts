import { Component } from '@angular/core';
import { CollapseComponent, CheckboxComponent } from '../../components';

@Component({
  selector: 'app-search-car',
  standalone: true,
  imports: [CollapseComponent, CheckboxComponent],
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css',
})
export class SearchCarComponent {}
