import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../components';
import { Vehicle } from '../../../interfaces/vehicle.interface';
import { Router, RouterOutlet } from '@angular/router';
import { FiltersContextService } from '../../services/filters-context.service';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private searchTerms = new Subject<string>();
  public vehicles: Vehicle[] = [];
  public vehiclesFiltered: Vehicle[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private filterService: FiltersContextService
  ) {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((search: string) => this.searchVehicles(search))
      )
      .subscribe((results) => (this.vehiclesFiltered = results));
  }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.http.get<Vehicle[]>('assets/cars.json').subscribe(
      (data) => {
        this.vehicles = data;
        this.loadVehiclesFiltered();
      },
      (error) => {
        console.error('Error loading vehicles', error);
      }
    );
  }

  navigateSearchCarScreen() {
    this.router.navigate(['/search-car']);
  }

  loadVehiclesFiltered() {
    let data = this.vehicles;

    const filters = this.filterService.getFilters();

    if (filters.engines.length > 0) {
      data = data.filter((x) => filters.engines.includes(x.engine));
    }

    if (filters.sizes.length > 0) {
      data = data.filter((x) => filters.sizes.includes(x.size));
    }

    if (filters.types.length > 0) {
      data = data.filter((x) => filters.types.includes(x.type));
    }

    this.vehiclesFiltered = data;
  }

  onSearch(event: any) {
    this.searchTerms.next(event.target.value);
  }

  private searchVehicles(search: string): Promise<Vehicle[]> {
    if (!search.length) {
      return new Promise((resolve) => resolve(this.vehicles));
    }
    return new Promise((resolve) => {
      const results = this.vehiclesFiltered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      resolve(results);
    });
  }
}
