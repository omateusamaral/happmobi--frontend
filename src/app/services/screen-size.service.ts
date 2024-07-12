import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private screenSize$ = new BehaviorSubject<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  constructor(
    private ngZone: NgZone,
    private platformService: PlatformService
  ) {
    if (this.platformService.isBrowser()) {
      this.screenSize$.next({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      this.listenToResize();
    }
  }

  private listenToResize() {
    window.addEventListener('resize', () => {
      this.ngZone.run(() => {
        this.screenSize$.next({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    });
  }

  getScreenSize() {
    return this.screenSize$.asObservable();
  }
}
