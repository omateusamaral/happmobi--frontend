import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../components';
import { Vehicle } from '../../../interfaces/vehicle.interface';
import { Router, RouterOutlet } from '@angular/router';
import { FiltersContextService } from '../../services/filters-context.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public vehicles: Vehicle[] = [];
  public vehiclesFiltered: Vehicle[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private filterService: FiltersContextService
  ) {}

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
}
