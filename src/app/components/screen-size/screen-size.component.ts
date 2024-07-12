import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-screen-size',
  standalone: true,
  imports: [],
  templateUrl: './screen-size.component.html',
  styleUrl: './screen-size.component.css',
})
export class ScreenSizeComponent implements OnInit, OnDestroy {
  screenWidth!: number;
  screenHeight!: number;
  private screenSizeSub!: Subscription;

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit() {
    this.screenSizeSub = this.screenSizeService
      .getScreenSize()
      .subscribe((size) => {
        this.screenWidth = size.width;
        this.screenHeight = size.height;
      });
  }

  ngOnDestroy() {
    if (this.screenSizeSub) {
      this.screenSizeSub.unsubscribe();
    }
  }
}
