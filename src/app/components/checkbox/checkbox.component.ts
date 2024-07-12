import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../../interfaces/vehicle.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input()
  checkboxes!: string[];
}
