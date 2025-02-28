import { AfterViewChecked, Component, OnInit } from '@angular/core';
import {
  CollapseComponent,
  CheckboxComponent,
  ToggleButtonComponent,
  BackgroundLogoComponent,
} from '../../components';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../../../interfaces/vehicle.interface';
import { FiltersContextService } from '../../services/filters-context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-vehicles',
  standalone: true,
  imports: [
    CollapseComponent,
    CheckboxComponent,
    ToggleButtonComponent,
    BackgroundLogoComponent,
  ],
  templateUrl: './filter-vehicles.component.html',
  styleUrl: './filter-vehicles.component.css',
})
export class FilterVehiclesComponent implements OnInit, AfterViewChecked {
  public checkboxes: string[] = [];
  public engineTypes: string[] = [];
  public sizes: string[] = [];
  public vehicles: Vehicle[] = [];

  constructor(
    private http: HttpClient,
    private filterService: FiltersContextService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadVehicles();
  }
  ngAfterViewChecked(): void {
    this.loadCheckboxes();
    this.loadEngineTypes();
    this.loadSizes();
  }

  loadVehicles(): void {
    this.http.get<Vehicle[]>('assets/cars.json').subscribe(
      (data) => {
        this.vehicles = data;
      },
      (error) => {
        console.error('Error loading vehicles', error);
      }
    );
  }

  loadCheckboxes(): void {
    this.checkboxes = [...new Set(this.vehicles.map((x) => x.type))];
  }

  loadEngineTypes(): void {
    const data = this.vehicles.map((x) => x.engine);
    this.engineTypes = [...new Set(data)];
  }

  loadSizes(): void {
    const data = this.vehicles.map((x) => x.size);
    this.sizes = [...new Set(data)];
  }

  clearFilters() {
    this.filterService.clearFilters();
  }

  goToHomeScreen() {
    this.router.navigate(['/home']);
  }

  onCancel() {
    this.filterService.clearFilters();
    this.goToHomeScreen();
  }
}
