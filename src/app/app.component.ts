import { Component, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'userManagement';
  showFiller = false;
  private userObs: Subscription;
  public user;

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

  constructor(
    private appService: AppService
  ) {
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
}
