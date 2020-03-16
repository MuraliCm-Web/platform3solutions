import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  userSub: Subject<any> = new Subject<any>();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(data) {
    localStorage.setItem('user', JSON.stringify(data));
    this.userSub.next(data);
    this.router.navigate(['/usersList']);
  }

  logout() {
    localStorage.removeItem('user');
    this.userSub.next(null);
    this.router.navigate(['/login']);
  }

  getLoggedInUser() {
    const user = localStorage.getItem('user');
    this.userSub.next(user);
  }

  createUpdateUser(data) {
    return data && data.id ? this.http.put(environment.usersEndPoint + '/' + data.id, data) : this.http.post(environment.usersEndPoint, data);
  }

  deleteUser(data) {
    return this.http.delete(environment.usersEndPoint + '/' + data.id);
  }

  getUser(id?) {
    return this.http.get(environment.usersEndPoint + (id ? id : ''));
  }

  createUpdateRole(data) {
    return data && data.id ? this.http.put(environment.rolesEndPoint, data) : this.http.post(environment.rolesEndPoint, data);
  }

  deleteRole(data) {
    return this.http.delete(environment.rolesEndPoint + '/' + data.id);
  }

  getRole(id?) {
    return this.http.get(environment.rolesEndPoint + (id ? id : ''));
  }
}
