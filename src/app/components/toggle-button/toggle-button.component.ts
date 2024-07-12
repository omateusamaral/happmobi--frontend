import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FiltersContextService } from '../../services/filters-context.service';
import { Filters } from '../../../interfaces/filters.interface';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent {
  constructor(private filterService: FiltersContextService) {}
  @Input()
  items!: string[];
  @Input()
  helperText!: string;

  public isSelected(item: string, helperText: string): boolean {
    let data = this.filterService.getFilters();

    if (helperText === 'Motor') {
      return data.engines.includes(item);
    }
    return data.sizes.includes(item);
  }

  public onSelect(item: string, helperText: string) {
    let data = this.filterService.getFilters();

    if (helperText === 'Motor') {
      this.handleEngine(item, data);
    } else {
      this.handleSizes(item, data);
    }
  }

  private handleEngine(item: string, data: Filters) {
    if (data.engines.includes(item)) {
      data.engines = data.engines.filter((engine) => engine !== item);
    } else {
      data.engines.push(item);
    }

    this.filterService.addToFilters(data);
  }

  private handleSizes(item: string, data: Filters) {
    if (data.sizes.includes(item)) {
      data.sizes = data.sizes.filter((size) => size !== item);
    } else {
      data.sizes.push(item);
    }

    this.filterService.addToFilters(data);
  }
}
