import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { ViewUserComponent } from './popupComponents/view-user/view-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersRolesComponent } from './components/users-roles/users-roles.component';

import { NewUserComponent } from './popupComponents/new-user/new-user.component';
import { CreateRoleComponent } from './popupComponents/create-role/create-role.component';
import { RoleChangeComponent } from './popupComponents/role-change/role-change.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    UsersListComponent,
    UsersRolesComponent,
    CreateRoleComponent,
    RoleChangeComponent,
    ViewUserComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [
    NewUserComponent,
    CreateRoleComponent,
    ViewUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
