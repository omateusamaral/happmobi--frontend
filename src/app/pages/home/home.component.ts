import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../components';
import { Vehicle } from '../../../interfaces/vehicle.interface';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadVehicles();
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
}
