import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loading!: boolean;
  @ViewChild('animateChild') animateChild: any;
  constructor(private router: Router, @Inject(PLATFORM_ID) public platformId: string) {
  }

  getPage(outlet: { activatedRouteData: { [x: string]: string; }; }) {

    return "main animated " + outlet.activatedRouteData['animation'] || 'bounceInUp';
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
        this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }
}
