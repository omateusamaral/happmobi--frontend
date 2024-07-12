import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../interfaces/vehicle.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent implements OnInit {
  public checkboxes: string[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadCheckboxes();
  }

  loadCheckboxes(): void {
    this.http.get<Vehicle[]>('assets/cars.json').subscribe(
      (data) => {
        this.checkboxes = [...new Set(data.map((x) => x.type))];
      },
      (error) => {
        console.error('Error loading vehicles', error);
      }
    );
  }
}
