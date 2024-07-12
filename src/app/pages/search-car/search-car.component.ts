import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CollapseComponent, CheckboxComponent } from '../../components';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../../../interfaces/vehicle.interface';

@Component({
  selector: 'app-search-car',
  standalone: true,
  imports: [CollapseComponent, CheckboxComponent],
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css',
})
export class SearchCarComponen implements OnInit, AfterContentInit {
  public checkboxes: string[] = [];
  public engineTypes: string[] = [];
  public vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadVehicles();
  }
  ngAfterContentInit(): void {
    this.loadCheckboxes();
    this.loadEngineTypes();
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
    this.engineTypes = [...new Set(this.vehicles.map((x) => x.engine))];
  }
}
