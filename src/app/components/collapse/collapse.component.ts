import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.css',
})
export class CollapseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
