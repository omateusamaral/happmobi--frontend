import { Component, Input } from '@angular/core';
import { FiltersContextService } from '../../services/filters-context.service';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  constructor(private filterService: FiltersContextService) {}
  @Input()
  checkboxes!: string[];

  public onCheckboxChange(event: any, item: string) {
    const data = this.filterService.getFilters();

    if (data.types.includes(item) && !event.target.checked) {
      data.types = data.types.filter((size) => size !== item);
    } else {
      data.types.push(item);
    }

    this.filterService.setToFilters(data);
  }

  public isCheckboxChecked(item: string): boolean {
    const data = this.filterService.getFilters();
    return data.types.includes(item);
  }
}
