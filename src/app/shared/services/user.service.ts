import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../interfaces/user';
import { IUser, LoggedInUser } from '../interfaces/user';
import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


const API_URL = `${environment.apiUrl}/api/users`;
const API_AUTH_URL = `${environment.apiUrl}/api/auth`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http:HttpClient = inject(HttpClient);
  router = inject(Router);


user = signal <LoggedInUser | null>(null);

constructor(){
    const access_token = localStorage.getItem("access_token");

    if (access_token){
      const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser;
      this.user.set({
        username: decodedTokenSubject.username,
        email:decodedTokenSubject.email,
        roles:decodedTokenSubject.roles
      })
    }
  }

loginUser (credentials: Credentials){
    const request = this.http.post<{token:string, user:IUser}>(
      `${API_AUTH_URL}/login`, credentials
    )
    return request
  }


  logoutUser(){
    this.user.set(null);
    localStorage.removeItem("access_token");
    this.router.navigate(['login-example'])
  }



   createUser(data:IUser){
    return this.http.post<IUser>(API_URL, data);
  }


  isTokenExpired(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return true;

    try {
      const decoded: any = jwtDecode(token);
      const exp = decoded.exp;
      const now = Math.floor(Date.now()/1000);
      console.log("Now", now, "Exp", exp);
      return exp < now
    } catch (e) {
      return true;
    }
  }



}