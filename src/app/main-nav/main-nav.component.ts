import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  showFiller = false;
  private userObs: Subscription;
  public user;
  constructor(private breakpointObserver: BreakpointObserver, private appService: AppService) {
    this.userObs = this.appService.userSub.subscribe(user => {
      this.user = user;
    });
    this.appService.getLoggedInUser();
  }

  ngOnDestroy(): void {
    this.userObs.unsubscribe();
  
  }

  logout() {
    this.appService.logout();
  }
  navMenu: Array<any> = [
    {
      item: 'User Details',
      path: 'usersList'
    },
    {
      item: 'Roles',
      path: 'userRols'
    }
  ];
  }
  

 
