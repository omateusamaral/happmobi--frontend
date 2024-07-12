import { Injectable } from '@angular/core';
import { Filters } from '../../interfaces/filters.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersContextService {
  private filters: Filters = {
    engines: [],
    sizes: [],
    types: [],
  };

  constructor() {}

  addToFilters(item: Filters) {
    this.filters = {
      ...item,
    };
  }

  getFilters(): Filters {
    return this.filters;
  }
}
