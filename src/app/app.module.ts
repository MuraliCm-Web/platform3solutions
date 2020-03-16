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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    UsersListComponent,
    UsersRolesComponent,
    CreateRoleComponent,
    RoleChangeComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
