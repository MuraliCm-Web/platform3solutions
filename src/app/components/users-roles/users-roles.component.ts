import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoleComponent } from 'src/app/popupComponents/create-role/create-role.component';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrls: ['./users-roles.component.scss']
})
export class UsersRolesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'role', 'description', 'menu'];
  dataSource = [];
  userObs: any;
  user: any;
  constructor(
    public dialog: MatDialog,
    private appService: AppService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userObs = this.appService.userSub.subscribe(user => {
      this.user = user;
      console.log(user);
    });
    this.getRoles();
  }

  getRoles() {
    this.appService.getRole()
      .subscribe((res: any[]) => {
        this.dataSource = res;
      });
  }

  addEditRole(data?): void {
    const dialogRef = this.dialog.open(CreateRoleComponent, {
      data
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getRoles();
      }
    });
  }

  deleteRole(role) {
    this.appService.deleteRole(role)
      .subscribe((res: any) => {
        this.snackBar.open('Role has been deleted successfully.', 'Ok', { duration: 2000 });
        this.getRoles();
      });
  }

}
