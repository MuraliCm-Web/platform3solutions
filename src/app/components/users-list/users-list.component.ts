import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RoleChangeComponent } from 'src/app/popupComponents/role-change/role-change.component';
import { AppService } from 'src/app/app.service';
import { NewUserComponent } from 'src/app/popupComponents/new-user/new-user.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewUserComponent } from 'src/app/popupComponents/view-user/view-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'role', 'menu'];
  dataSource: MatTableDataSource<[]>;
  isFilterShow = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 

  constructor(
    public dialog: MatDialog,
    private appService: AppService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.appService.getUser()
      .subscribe((res: any[]) => {
        this.dataSource = new MatTableDataSource(res);
      });
  }


  roleChange(data): void {
    const dialogRef = this.dialog.open(RoleChangeComponent, {
    data
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getUsers();
      }
    });
  }

  addEditUser(user?) {
    const dialogRef = this.dialog.open(NewUserComponent, {
      data: user
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getUsers();
      }
    });
  }

  
 viewUser(data) {
    const dialogRef = this.dialog.open(ViewUserComponent, {
      data
    });
  
  }

  showFilfer() {
    this.isFilterShow = !this.isFilterShow;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(role) {
    this.appService.deleteUser(role)
      .subscribe((res: any) => {
        this.snackBar.open('User has been deleted successfully.', 'Ok', { duration: 2000 });
        this.getUsers();
      });
  }
}
