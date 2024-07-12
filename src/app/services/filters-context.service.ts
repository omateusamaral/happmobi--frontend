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

  setToFilters(item: Filters) {
    this.filters = {
      ...item,
    };
  }

  getFilters(): Filters {
    return this.filters;
  }

  clearFilters() {
    this.filters = {
      engines: [],
      sizes: [],
      types: [],
    };
  }
}
