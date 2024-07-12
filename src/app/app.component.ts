import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenSizeComponent } from './components';
import { ScreenSizeService } from './services/screen-size.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenSizeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLargeScreen = false;

  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSizeService.getScreenSize().subscribe((size) => {
      this.isLargeScreen = size.width > 768;
    });
  }
}
