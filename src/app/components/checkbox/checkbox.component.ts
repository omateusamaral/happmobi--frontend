import { Component, Input, OnInit } from '@angular/core';
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
    let data = this.filterService.getFilters();

    if (data.sizes.includes(item) && !event.target.checked) {
      data.sizes = data.sizes.filter((size) => size !== item);
    } else {
      data.sizes.push(item);
    }

    this.filterService.addToFilters(data);
  }

  public isCheckboxChecked(item: string): boolean {
    let data = this.filterService.getFilters();
    return data.sizes.includes(item);
  }
}
