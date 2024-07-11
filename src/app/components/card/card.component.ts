import { Component, Input } from '@angular/core';

@Component({
  selector: 'car-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  name!: string;
  @Input()
  year!: string;
  @Input()
  type!: string;
  @Input()
  engine!: string;
  @Input()
  size!: string;
  @Input()
  image!: string;
}
