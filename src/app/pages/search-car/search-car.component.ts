import { AfterContentInit, Component, OnInit } from '@angular/core';
import {
  CollapseComponent,
  CheckboxComponent,
  ToggleButtonComponent,
  BackgroundLogoComponent,
} from '../../components';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../../../interfaces/vehicle.interface';

@Component({
  selector: 'app-search-car',
  standalone: true,
  imports: [
    CollapseComponent,
    CheckboxComponent,
    ToggleButtonComponent,
    BackgroundLogoComponent,
  ],
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css',
})
export class SearchCarComponent implements OnInit, AfterContentInit {
  public checkboxes: string[] = [];
  public engineTypes: string[] = [];
  public sizes: string[] = [];
  public vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadVehicles();
  }
  ngAfterContentInit(): void {
    this.loadEngineTypes();
    this.loadCheckboxes();
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
}
