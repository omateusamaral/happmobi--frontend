import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BackgroundLogoComponent, LogoComponent } from '../../components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BackgroundLogoComponent, LogoComponent, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }
}
